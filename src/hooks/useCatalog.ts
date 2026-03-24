import { useState, useEffect, useMemo } from "react"
import { Product, FilterOption } from "@/types"
import { validateProducts } from "@/lib/schemas"

interface UseCatalogProps {
    sheetUrl?: string
    fallbackData: Product[]
    title: string
    cartCategory: string
    filterProperty: string
    filterOptions: FilterOption[]
    mapSheetData?: (item: any, index: number) => Product
    productsPerPage?: number
}

// Sencillo cache en memoria para evitar peticiones repetidas al navegar entre categorías
const catalogCache: Record<string, { data: Product[], timestamp: number }> = {}
const CACHE_DURATION = 1000 * 60 * 10 // 10 minutos

export function useCatalog({
    sheetUrl,
    fallbackData,
    title,
    cartCategory,
    filterProperty,
    filterOptions,
    mapSheetData,
    productsPerPage = 9
}: UseCatalogProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filterValue, setFilterValue] = useState("all")
    const [sortOrder, setSortOrder] = useState("featured")
    const [currentPage, setCurrentPage] = useState(1)

    const safeFallbackData = useMemo(() => fallbackData.map(p => ({
        ...p,
        id: String(p.id).startsWith(cartCategory) ? p.id : `${cartCategory}-${p.id}`
    })), [fallbackData, cartCategory])

    useEffect(() => {
        const fetchProducts = async () => {
            if (!sheetUrl) {
                setProducts(safeFallbackData)
                setIsLoading(false)
                return
            }

            // Verificar si tenemos los datos en cache y no han expirado
            const cached = catalogCache[sheetUrl]
            const now = Date.now()
            if (cached && now - cached.timestamp < CACHE_DURATION) {
                setProducts(cached.data)
                setIsLoading(false)
                return
            }

            setIsLoading(true) // Asegurar que mostramos carga si no hay cache
            try {

                const res = await fetch(sheetUrl)
                const data = await res.json()
                
                const formattedData: Product[] = data.map((item: any, index: number) => {
                    if (mapSheetData) {
                        return mapSheetData(item, index)
                    }
                    
                    const rawImages = item.images || item.image
                    let imagesArray = ["https://images.unsplash.com/photo-1611082294975-6804576cb787?auto=format&fit=crop&q=80&w=400&h=400"]
                    if (typeof rawImages === "string" && rawImages.trim() !== "") {
                        imagesArray = rawImages.split(",").map((url: string) => url.trim())
                    } else if (Array.isArray(rawImages) && rawImages.length > 0) {
                        imagesArray = rawImages
                    }
                    
                    const p: Product = {
                        id: `${cartCategory}-${item.id || index}`,
                        name: item.name || "Producto sin nombre",
                        price: parseFloat(item.price) || 0,
                        images: imagesArray,
                        stock: item.stock !== undefined && item.stock !== "" ? parseInt(item.stock, 10) : 10
                    }
                    p[filterProperty] = item[filterProperty] || item.type || item.category || item.flavor || "General"
                    return p
                })

                const validatedData = validateProducts(formattedData);
                const finalData = validatedData.length > 0 ? validatedData : safeFallbackData
                
                // Guardar en cache para accesos futuros ultra-rápidos
                catalogCache[sheetUrl!] = { data: finalData, timestamp: Date.now() }
                
                setProducts(finalData)
            } catch (error) {
                console.error(`Error al obtener los ${title} de Google Sheets:`, error)
                setProducts(safeFallbackData)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [sheetUrl, title, safeFallbackData, filterProperty, mapSheetData, cartCategory])

    useEffect(() => {
        setCurrentPage(1)
    }, [filterValue, sortOrder])

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products]

        if (filterValue !== "all") {
            const selectedOption = filterOptions.find(opt => opt.value === filterValue)
            if (selectedOption) {
                result = result.filter(p => p[filterProperty] === selectedOption.mappedValue)
            }
        }

        if (sortOrder === "price-asc") {
            result.sort((a, b) => a.price - b.price)
        } else if (sortOrder === "price-desc") {
            result.sort((a, b) => b.price - a.price)
        }

        return result
    }, [products, filterValue, sortOrder, filterOptions, filterProperty])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage)

    return {
        products: currentProducts,
        isLoading,
        filterValue,
        setFilterValue,
        sortOrder,
        setSortOrder,
        currentPage,
        setCurrentPage,
        totalPages,
        totalResults: filteredAndSortedProducts.length
    }
}

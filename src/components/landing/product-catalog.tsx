"use client"

import { useState, useEffect, useMemo, ReactNode } from "react"
import Navbar from "./navbar"
import { Footer } from "./footer"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/ui/product-carousel"
import { useCart } from "@/context/CartContext"

export interface Product {
    id: string | number;
    name: string;
    price: number;
    images: string[];
    stock?: number;
    [key: string]: any; 
}

export interface FilterOption {
    label: string;
    value: string;
    mappedValue: string; 
}

export interface ThemeClasses {
    text: string;
    border: string;
    borderHover: string;
    bgFocus: string;
    bgHover: string;
    shadowHover: string;
    glowBg: string;
    priceGradient: string;
    activePageBg: string;
    loaderBorder: string;
}

export interface ProductCatalogProps {
    title: string;
    titleGradientClass: string;
    description: string;
    sheetUrl: string | undefined;
    fallbackData: Product[];
    themeClasses: ThemeClasses;
    cartCategory: string;
    filterOptions: FilterOption[];
    defaultFilterLabel: string;
    filterProperty: string;
    renderBadge: (product: Product) => ReactNode;
    mapSheetData?: (item: any, index: number) => Product;
}

export default function ProductCatalog({
    title,
    titleGradientClass,
    description,
    sheetUrl,
    fallbackData,
    themeClasses,
    cartCategory,
    filterOptions,
    defaultFilterLabel,
    filterProperty,
    renderBadge,
    mapSheetData
}: ProductCatalogProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filterValue, setFilterValue] = useState("all")
    const [sortOrder, setSortOrder] = useState("featured")
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9;

    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

    const handleAddToCart = (product: Product) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0] || "",
            category: cartCategory,
        });
    };

    const getQuantity = (id: string | number) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 0;
    };

    const safeFallbackData = useMemo(() => fallbackData.map(p => ({
        ...p,
        id: String(p.id).startsWith(cartCategory) ? p.id : `${cartCategory}-${p.id}`
    })), [fallbackData, cartCategory]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (!sheetUrl) {
                    console.log(`No URL de API encontrada para ${title}, usando datos de prueba locales.`);
                    setProducts(safeFallbackData);
                    setIsLoading(false);
                    return;
                }

                const res = await fetch(sheetUrl);
                const data = await res.json();
                
                const formattedData: Product[] = data.map((item: any, index: number) => {
                    if (mapSheetData) {
                        return mapSheetData(item, index);
                    }
                    
                    const rawImages = item.images || item.image;
                    let imagesArray = ["https://images.unsplash.com/photo-1611082294975-6804576cb787?auto=format&fit=crop&q=80&w=400&h=400"];
                    if (typeof rawImages === "string" && rawImages.trim() !== "") {
                        imagesArray = rawImages.split(",").map(url => url.trim());
                    } else if (Array.isArray(rawImages) && rawImages.length > 0) {
                        imagesArray = rawImages;
                    }
                    
                    const p: Product = {
                        id: `${cartCategory}-${item.id || index}`,
                        name: item.name || "Producto sin nombre",
                        price: parseFloat(item.price) || 0,
                        images: imagesArray,
                        stock: item.stock !== undefined && item.stock !== "" ? parseInt(item.stock, 10) : 10
                    };
                    p[filterProperty] = item[filterProperty] || item.type || item.category || item.flavor || "General";
                    return p;
                });

                setProducts(formattedData.length > 0 ? formattedData : safeFallbackData);
            } catch (error) {
                console.error(`Error al obtener los ${title} de Google Sheets:`, error);
                setProducts(safeFallbackData);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [sheetUrl, title, safeFallbackData, filterProperty, mapSheetData, cartCategory]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterValue, sortOrder]);

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products]

        if (filterValue !== "all") {
            const selectedOption = filterOptions.find(opt => opt.value === filterValue);
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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

    return (
        <main className="container mx-auto px-6">
            <Navbar />
            
            <div className="pt-32 pb-8 min-h-[60vh]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h1 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass} mb-4`}>
                            {title}
                        </h1>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            {description}
                        </p>
                    </div>
                    
                    {/* Controles de Filtros y Ordenamiento */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-0">
                        <div className="relative group w-full sm:w-auto">
                            <select 
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                                className={`appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 ${themeClasses.borderHover} text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 ${themeClasses.bgFocus} w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg ${themeClasses.shadowHover}`}
                            >
                                <option value="all">{defaultFilterLabel}</option>
                                {filterOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <div className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 ${themeClasses.text} transition-colors group-hover:opacity-80`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>

                        <div className="relative group w-full sm:w-auto">
                            <select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className={`appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 ${themeClasses.borderHover} text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 ${themeClasses.bgFocus} w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg ${themeClasses.shadowHover}`}
                            >
                                <option value="featured">Destacados</option>
                                <option value="price-asc">Precio: Menor a Mayor</option>
                                <option value="price-desc">Precio: Mayor a Menor</option>
                            </select>
                            <div className={`absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 ${themeClasses.text} transition-colors group-hover:opacity-80`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20 min-h-[40vh]">
                        <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${themeClasses.loaderBorder}`}></div>
                    </div>
                ) : (
                    <>
                        {filteredAndSortedProducts.length === 0 && (
                            <div className="text-center py-20 min-h-[40vh]">
                                <h3 className="text-2xl font-semibold text-zinc-300 mb-2">No se encontraron productos</h3>
                                <p className="text-zinc-500">Intenta probar con otros filtros o revisa la conexión con Google Sheets.</p>
                                <Button 
                                    variant="outline" 
                                    className="mt-6 border-zinc-800 text-zinc-300 hover:bg-zinc-800 cursor-pointer"
                                    onClick={() => setFilterValue("all")}
                                >
                                    Limpiar filtros
                                </Button>
                            </div>
                        )}

                        {/* Grid 3x3 de Productos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {currentProducts.map((product) => (
                                <div 
                                    key={product.id} 
                                    className={`group relative flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 transition-all duration-500 ${product.stock === 0 ? 'opacity-80' : `${themeClasses.borderHover} ${themeClasses.shadowHover}`}`}
                                >
                                    {/* Glow background behind image */}
                                    {product.stock !== 0 && (
                                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 ${themeClasses.glowBg} blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    )}
                                    
                                    <div className="relative aspect-[4/3] overflow-hidden p-6 pb-0 flex items-center justify-center">
                                        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                                            {renderBadge(product)}
                                            {product.stock === 0 && (
                                                <span className="bg-red-500/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-red-400/50 font-bold shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                                    AGOTADO
                                                </span>
                                            )}
                                            {(product.stock !== undefined && product.stock > 0 && product.stock <= 5) && (
                                                <span className="bg-orange-500/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-orange-400/50 font-bold shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-pulse">
                                                    ¡Solo {product.stock} disponibles!
                                                </span>
                                            )}
                                        </div>
                                        <div className={`w-full h-full transition-all duration-500 ${product.stock === 0 ? 'grayscale opacity-60' : ''}`}>
                                            <ProductCarousel images={product.images} name={product.name} />
                                        </div>
                                    </div>
                                    
                                    <div className="relative z-10 p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className={`text-xl font-bold tracking-tight ${product.stock === 0 ? 'text-zinc-400' : 'text-zinc-100'}`}>{product.name}</h3>
                                            <span className={`text-xl font-bold ${product.stock === 0 ? 'text-zinc-500' : `bg-clip-text text-transparent bg-gradient-to-r ${themeClasses.priceGradient}`}`}>
                                                ${product.price}
                                            </span>
                                        </div>
                                        <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-4" />
                                        
                                        <div className="mt-auto pt-2">
                                            {product.stock === 0 ? (
                                                <Button 
                                                    disabled
                                                    className="w-full transition-all duration-300 rounded-xl h-12 bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed opacity-70"
                                                >
                                                    Agotado
                                                </Button>
                                            ) : getQuantity(product.id) > 0 ? (
                                                <div className={`flex items-center justify-between w-full h-12 bg-zinc-900/50 rounded-xl border ${themeClasses.border} overflow-hidden`}>
                                                    <button 
                                                        onClick={() => {
                                                            if (getQuantity(product.id) === 1) {
                                                                removeFromCart(product.id);
                                                            } else {
                                                                updateQuantity(product.id, -1);
                                                            }
                                                        }}
                                                        className="w-12 h-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                                                    </button>
                                                    <span className="flex-1 text-center font-bold text-white">
                                                        {getQuantity(product.id)} en el carrito
                                                    </span>
                                                    <button 
                                                        onClick={() => {
                                                            if (product.stock === undefined || getQuantity(product.id) < product.stock) {
                                                                updateQuantity(product.id, 1);
                                                            }
                                                        }}
                                                        className={`w-12 h-full flex items-center justify-center transition-colors ${
                                                            product.stock !== undefined && getQuantity(product.id) >= product.stock
                                                            ? 'text-zinc-600 cursor-not-allowed bg-zinc-900/50'
                                                            : `${themeClasses.text} hover:text-white ${themeClasses.bgHover}`
                                                        }`}
                                                        disabled={product.stock !== undefined && getQuantity(product.id) >= product.stock}
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                                                    </button>
                                                </div>
                                            ) : (
                                                <Button 
                                                    onClick={() => handleAddToCart(product)}
                                                    className={`w-full transition-all duration-300 rounded-xl h-12 bg-transparent ${themeClasses.bgHover} ${themeClasses.text} hover:text-white border ${themeClasses.border}`}
                                                >
                                                    Agregar al carrito
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Controles de Paginación */}
                        {totalPages > 1 && (
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 mb-8">
                                <Button 
                                    variant="outline" 
                                    onClick={() => {
                                        setCurrentPage(prev => Math.max(prev - 1, 1));
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    disabled={currentPage === 1}
                                    className={`border-zinc-800 transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-zinc-300 hover:bg-zinc-800'}`}
                                >
                                    Anterior
                                </Button>
                                
                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setCurrentPage(i + 1);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all ${
                                                currentPage === i + 1 
                                                ? themeClasses.activePageBg 
                                                : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/5"
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <Button 
                                    variant="outline" 
                                    onClick={() => {
                                        setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    disabled={currentPage === totalPages}
                                    className={`border-zinc-800 transition-all ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'text-zinc-300 hover:bg-zinc-800'}`}
                                >
                                    Siguiente
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </main>
    )
}

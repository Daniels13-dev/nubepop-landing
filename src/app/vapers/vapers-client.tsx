"use client"

import { useState, useEffect, useMemo } from "react"
import Navbar from "../../components/landing/navbar"
import { Footer } from "../../components/landing/footer"
import { Button } from "../../components/ui/button"
import { ProductCarousel } from "../../components/ui/product-carousel"

export interface Product {
    id: string | number;
    name: string;
    flavor: string;
    price: number;
    images: string[];
}

// Dummy product data (sirve como plan de contingencia si no hay datos)
const fallbackProducts: Product[] = [
  { id: 1, name: "Berry Bliss 5000", flavor: "Fruity", price: 29.99, images: ["https://images.unsplash.com/photo-1611082294975-6804576cb787?auto=format&fit=crop&q=80&w=400&h=400", "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 2, name: "Mint Freeze Pro", flavor: "Ice", price: 24.99, images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 3, name: "Mango Tango", flavor: "Fruity", price: 27.99, images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 4, name: "Gold Standard Tobacco", flavor: "Tobacco", price: 34.99, images: ["https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 5, name: "Watermelon Rush", flavor: "Fruity", price: 26.99, images: ["https://images.unsplash.com/photo-1580870058867-7448261e474f?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 6, name: "Icy Grape", flavor: "Ice", price: 25.99, images: ["https://images.unsplash.com/photo-1628143285623-01309325dbb4?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 7, name: "Vanilla Custard", flavor: "Dessert", price: 28.99, images: ["https://images.unsplash.com/photo-1585863581729-195156ee1912?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 8, name: "Blue Razz Lemonade", flavor: "Fruity", price: 29.99, images: ["https://images.unsplash.com/photo-1555513812-70b13bf4bb40?auto=format&fit=crop&q=80&w=400&h=400"] },
  { id: 9, name: "Cool Mint Max", flavor: "Ice", price: 31.99, images: ["https://images.unsplash.com/photo-1658421882103-0dc2aadb31dc?auto=format&fit=crop&q=80&w=400&h=400"] },
]

export default function VapersPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [flavorFilter, setFlavorFilter] = useState("all")
    const [sortOrder, setSortOrder] = useState("featured")

    // Fetch products desde la API de Google Sheets
    useEffect(() => {
        const fetchVapers = async () => {
            try {
                // El link a la app script de google sheets que crearemos
                const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_VAPERS_URL;
                
                if (!apiUrl) {
                    console.log("No URL de API encontrada, usando datos de prueba locales.");
                    setProducts(fallbackProducts);
                    setIsLoading(false);
                    return;
                }

                const res = await fetch(apiUrl);
                const data = await res.json();
                
                // Mapeamos los datos para asegurarnos de que coincidan con nuestra interfaz
                // Asume que tu tabla de Google Sheets tiene columnas: id, name, flavor, price, image o images
                const formattedData: Product[] = data.map((item: any, index: number) => {
                    const rawImages = item.images || item.image;
                    let imagesArray = ["https://images.unsplash.com/photo-1611082294975-6804576cb787?auto=format&fit=crop&q=80&w=400&h=400"];
                    if (typeof rawImages === "string" && rawImages.trim() !== "") {
                        imagesArray = rawImages.split(",").map(url => url.trim());
                    } else if (Array.isArray(rawImages) && rawImages.length > 0) {
                        imagesArray = rawImages;
                    }
                    
                    return {
                        id: item.id || index.toString(),
                        name: item.name || "Producto sin nombre",
                        flavor: item.flavor || "Fruity",
                        price: parseFloat(item.price) || 0,
                        images: imagesArray
                    }
                });

                // Si por alguna razón los datos vienen vacíos usamos el fallback
                setProducts(formattedData.length > 0 ? formattedData : fallbackProducts);
            } catch (error) {
                console.error("Error al obtener los vapers de Google Sheets:", error);
                setProducts(fallbackProducts);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVapers();
    }, []);

    // Aplicar filtros y ordenamiento
    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products]

        // Filtro por sabor
        if (flavorFilter !== "all") {
            const mappedFlavor = flavorFilter === "fruity" ? "Fruity" 
                               : flavorFilter === "ice" ? "Ice" 
                               : flavorFilter === "dessert" ? "Dessert" 
                               : "Tobacco"
            result = result.filter(p => p.flavor === mappedFlavor)
        }

        // Ordenamiento
        if (sortOrder === "price-asc") {
            result.sort((a, b) => a.price - b.price)
        } else if (sortOrder === "price-desc") {
            result.sort((a, b) => b.price - a.price)
        }

        return result
    }, [products, flavorFilter, sortOrder])

    return (
        <main className="container mx-auto px-6">
            <Navbar />
            
            <div className="py-24 pt-32 min-h-screen">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500 mb-4">
                            Vapers
                        </h1>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            Descubre nuestra selección premium de vapers. Calidad excepcional y sabores inolvidables.
                        </p>
                    </div>
                    
                    {/* Controles de Filtros y Ordenamiento */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-0">
                        <div className="relative group w-full sm:w-auto">
                            <select 
                                value={flavorFilter}
                                onChange={(e) => setFlavorFilter(e.target.value)}
                                className="appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 group-hover:border-[#c049eb]/50 text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#c049eb]/50 w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg group-hover:shadow-[0_0_20px_-5px_rgba(192,73,235,0.3)]"
                            >
                                <option value="all">Todos los Sabores</option>
                                <option value="fruity">Frutales</option>
                                <option value="ice">Fríos (Ice)</option>
                                <option value="dessert">Postres</option>
                                <option value="tobacco">Tabaco</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover:text-[#c049eb] transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>

                        <div className="relative group w-full sm:w-auto">
                            <select 
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="appearance-none bg-zinc-900/40 backdrop-blur-xl border border-white/10 group-hover:border-[#c049eb]/50 text-zinc-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#c049eb]/50 w-full cursor-pointer transition-all duration-300 font-medium whitespace-nowrap shadow-lg group-hover:shadow-[0_0_20px_-5px_rgba(192,73,235,0.3)]"
                            >
                                <option value="featured">Destacados</option>
                                <option value="price-asc">Precio: Menor a Mayor</option>
                                <option value="price-desc">Precio: Mayor a Menor</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover:text-[#c049eb] transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estado de carga */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20 min-h-[40vh]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c049eb]"></div>
                    </div>
                ) : (
                    <>
                        {/* Resultados vacíos */}
                        {filteredAndSortedProducts.length === 0 && (
                            <div className="text-center py-20 min-h-[40vh]">
                                <h3 className="text-2xl font-semibold text-zinc-300 mb-2">No se encontraron productos</h3>
                                <p className="text-zinc-500">Intenta probar con otros filtros de sabor o revisa la conexión con Google Sheets.</p>
                                <Button 
                                    variant="outline" 
                                    className="mt-6 border-zinc-800 text-zinc-300 hover:bg-zinc-800 cursor-pointer"
                                    onClick={() => setFlavorFilter("all")}
                                >
                                    Limpiar filtros
                                </Button>
                            </div>
                        )}

                        {/* Grid 3x3 de Productos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {filteredAndSortedProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="group relative flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-[#c049eb]/30 hover:shadow-[0_0_40px_-15px_rgba(192,73,235,0.3)] transition-all duration-500"
                        >
                            {/* Glow background behind image */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#c049eb]/20 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative aspect-[4/3] overflow-hidden p-6 pb-0 flex items-center justify-center">
                                {/* Badge in the top right instead of top left */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-zinc-900/80 backdrop-blur-md text-[#c049eb] text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium">
                                        {product.flavor}
                                    </span>
                                </div>
                                <ProductCarousel images={product.images} name={product.name} />
                            </div>
                            
                            <div className="relative z-10 p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-zinc-100 tracking-tight">{product.name}</h3>
                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c049eb] to-pink-200">
                                        ${product.price}
                                    </span>
                                </div>
                                {/* Optional subtle line separator */}
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-4" />
                                
                                <div className="mt-auto pt-2">
                                    <Button className="w-full bg-transparent hover:bg-[#c049eb] text-[#c049eb] hover:text-white border border-[#c049eb]/50 transition-all duration-300 rounded-xl h-12">
                                        Agregar al carrito
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </>
                )}
            </div>

            <Footer />
        </main>
    )
}

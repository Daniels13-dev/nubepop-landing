import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 pt-16 pb-8 backdrop-blur-md mt-12 relative overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/20 blur-[128px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[96px]"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6 text-2xl font-bold tracking-tighter">
                            <Image 
                                src="/logo-negro.png" 
                                alt="NubePop Logo"
                                width={120}
                                height={48} 
                                className="h-12 w-auto rounded-xl shadow-[0_0_20px_rgba(137,37,211,0.3)]"
                            />
                            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                NubePop
                            </span>
                        </div>
                        <p className="max-w-xs text-muted-foreground leading-relaxed">
                            Elevando la experiencia con los mejores vapers, destilados y baterías de máxima calidad. Tu satisfacción es nuestra prioridad.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-foreground text-lg">Enlaces rápidos</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#features" className="hover:text-primary transition-colors">Productos</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">Preguntas frecuentes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-foreground text-lg">Síguenos</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/nubepoptd/" target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(137,37,211,0.4)]">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/share/1Dyyc3VPqJ/?mibextid=wwXIfr" target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(137,37,211,0.4)]">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} NubePop. Todos los derechos reservados.</p>
                    <p className="mt-4 md:mt-0 transition-colors hover:text-foreground">
                        Diseñado con <span className="text-secondary animate-pulse px-1">♥</span> por NubePop
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-xs text-zinc-500 max-w-3xl mx-auto border border-zinc-800 p-4 rounded-lg bg-black/20">
                        <strong>ADVERTENCIA:</strong> Los productos de vapeo y destilados mostrados en este sitio web están destinados 
                        únicamente para el uso de adultos en edad legal para consumir tabaco y productos relacionados en su jurisdicción. 
                        Manténgase fuera del alcance de los niños y las mascotas.
                    </p>
                </div>
            </div>
        </footer>
    )
}

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
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573000000000'}`} target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                                <svg viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
                                </svg>
                                <span className="sr-only">WhatsApp</span>
                            </a>
                            <a href="https://www.instagram.com/nubepoptd/" target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.4)]">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/share/1Dyyc3VPqJ/?mibextid=wwXIfr" target="_blank" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]">
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

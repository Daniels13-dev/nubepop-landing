import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import Image from "next/image"
import { socialLinks } from "@/config/site-content"
import { MessageSquare } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/5 bg-black/20 pt-16 pb-8 backdrop-blur-md mt-12 relative overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/20 blur-[128px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[96px]"></div>

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Image 
                                src="/logo-negro.png" 
                                alt="NubePop Logo"
                                width={120}
                                height={48} 
                                className="h-10 w-auto rounded-lg shadow-lg"
                            />
                            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                NubePop
                            </span>
                        </div>
                        <p className="max-w-xs text-zinc-400 leading-relaxed text-sm">
                            Elevando la experiencia con los mejores vapers, destilados y baterías de máxima calidad. Tu satisfacción es nuestra prioridad.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-white text-base">Explorar</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><a href="/vapers" className="hover:text-secondary transition-colors">Vapers</a></li>
                            <li><a href="/destilados" className="hover:text-secondary transition-colors">Destilados</a></li>
                            <li><a href="/baterias" className="hover:text-secondary transition-colors">Baterías</a></li>
                            <li><a href="/combos" className="hover:text-secondary transition-colors">Combos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-white text-base">Conéctate</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary"
                                    aria-label={link.name}
                                >
                                    <SocialIcon name={link.icon} title={link.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Warning Section */}
                <div className="mb-12 border-y border-white/5 py-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 px-4 py-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 text-red-500">
                            <span className="text-xl font-black">!</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-4xl italic">
                            <strong className="text-zinc-300 block mb-1">ADVERTENCIA PARA MAYORES DE EDAD:</strong> 
                            Los productos de vapeo y destilados mostrados en este sitio web están destinados 
                            únicamente para el uso de adultos en edad legal para consumir tabaco y productos relacionados en su jurisdicción. 
                            La nicotina es una sustancia altamente adictiva. Manténgase fuera del alcance de los niños y las mascotas.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-600">
                    <p>© {currentYear} NubePop.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="/privacidad" className="hover:text-zinc-400 transition-colors">Política de Privacidad</a>
                        <a href="/terminos" className="hover:text-zinc-400 transition-colors">Términos y Condiciones</a>
                        <span className="flex items-center gap-1.5 ml-4">
                            HECHO CON <span className="text-pink-500 animate-pulse text-xs">♥</span> POR NUBEPOP
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialIcon({ name, title }: { name: string; title: string }) {
    switch (name.toLowerCase()) {
        case 'instagram':
            return <FaInstagram className="w-5 h-5" />
        case 'facebook':
            return <FaFacebook className="w-5 h-5" />
        case 'whatsapp':
            return <FaWhatsapp className="w-5 h-5" />
        default:
            return <MessageSquare className="w-5 h-5" />
    }
}

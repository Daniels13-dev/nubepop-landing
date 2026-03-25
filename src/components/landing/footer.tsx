import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import Image from "next/image"
import { socialLinks } from "@/config/site-content"
import { MessageSquare } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/5 bg-black/10 pt-8 lg:pt-16 pb-12 lg:pb-8 backdrop-blur-md mt-4 relative overflow-hidden">
            {/* Glow effect background */}
            <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[128px]"></div>

            <div className="site-container relative z-10">
                {/* --- MÓVIL (Center Aligned) --- */}
                <div className="lg:hidden flex flex-col items-center text-center">
                    <div className="mb-1">
                        <Image
                            src="/logo-negro.png"
                            alt="NubePop"
                            width={400}
                            height={160}
                            className="h-40 w-auto mx-auto mb-0"
                        />
                        <h2 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                            NubePop
                        </h2>
                    </div>

                    <div className="flex gap-4 mb-12">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white"
                            >
                                <SocialIcon name={link.icon} title={link.name} />
                            </a>
                        ))}
                    </div>

                    <div className="w-full p-6 rounded-3xl bg-red-500/5 border border-red-500/10 mb-12">
                        <p className="text-[10px] text-zinc-500 leading-relaxed italic">
                            <strong className="text-red-500/80 block mb-1 uppercase tracking-tighter">
                                Advertencia Legal
                            </strong>
                            Venta exclusiva a mayores de 18 años. Los productos contienen nicotina o
                            derivados que pueden ser adictivos.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-[10px] uppercase font-black tracking-[0.2em] text-zinc-600">
                        <p>© {currentYear} NUBEPOP.</p>
                        <div className="flex gap-4 justify-center">
                            <a href="/privacidad">Privacidad</a>
                            <a href="/terminos">Términos</a>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP (Grid Layout) --- */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo-negro.png"
                                alt="NubePop Logo"
                                width={120}
                                height={48}
                                className="h-10 w-auto rounded-lg"
                            />
                            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent uppercase">
                                NubePop
                            </span>
                        </div>
                        <p className="max-w-xs text-zinc-400 leading-relaxed text-sm">
                            Elevando la experiencia con los mejores vapers, destilados y baterías de
                            máxima calidad. Tu satisfacción es nuestra prioridad.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-white text-base">Explorar</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li>
                                <a
                                    href="/vapers"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Vapers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/destilados"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Destilados
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/baterias"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Baterías
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/combos"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Combos
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-white text-base">Conéctate</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-500 transition-all hover:border-secondary hover:text-secondary"
                                >
                                    <SocialIcon name={link.icon} title={link.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Warning Block */}
                <div className="hidden lg:block mb-12 border-y border-white/5 py-8">
                    <div className="flex items-center gap-6 px-4 py-6 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 text-red-500">
                            <span className="text-xl font-black">!</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-4xl italic">
                            <strong className="text-zinc-300 block mb-1">
                                ADVERTENCIA PARA MAYORES DE EDAD:
                            </strong>
                            Los productos de vapeo y destilados mostrados en este sitio web están
                            destinados únicamente para el uso de adultos en edad legal para consumir
                            tabaco y productos relacionados en su jurisdicción.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialIcon({ name, title }: { name: string; title: string }) {
    switch (name.toLowerCase()) {
        case "instagram":
            return <FaInstagram className="w-5 h-5" />
        case "facebook":
            return <FaFacebook className="w-5 h-5" />
        case "whatsapp":
            return <FaWhatsapp className="w-5 h-5" />
        default:
            return <MessageSquare className="w-5 h-5" />
    }
}

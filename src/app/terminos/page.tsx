"use client"

import Navbar from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp } from "@/lib/animations"
import { FileText, Shield, Scale, HelpCircle } from "lucide-react"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <Navbar />

            <div className="pt-40 pb-24 site-container">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <div className="inline-flex p-3 rounded-2xl bg-secondary/10 text-secondary mb-6 border border-secondary/20">
                            <Scale className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Términos y <span className="text-secondary">Condiciones</span>
                        </h1>
                        <p className="text-zinc-500 text-lg">Última actualización: Marzo 2024</p>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="space-y-12 bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] text-zinc-300 leading-relaxed shadow-2xl"
                    >
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-secondary text-sm">
                                    01
                                </span>
                                Aceptación de los Términos
                            </h2>
                            <p>
                                Al acceder y utilizar el sitio web de NubePop, el usuario acepta de
                                manera expresa y sin reservas todos los términos y condiciones aquí
                                descritos. Si usted no está de acuerdo con estos términos, le
                                solicitamos abstenerse de utilizar nuestra plataforma y servicios.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-secondary text-sm">
                                    02
                                </span>
                                Restricción de Edad
                            </h2>
                            <p className="font-bold text-white bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                                Queda terminantemente prohibido el acceso, navegación y compra de
                                productos a personas menores de 18 años. Al utilizar este sitio web,
                                usted declara bajo gravedad de juramento que cumple con la mayoría
                                de edad legal requerida en su jurisdicción para adquirir productos
                                relacionados con el vapeo y destilados.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-secondary text-sm">
                                    03
                                </span>
                                Uso de Productos y Responsabilidad
                            </h2>
                            <p>
                                Los vaporizadores, destilados y accesorios deben ser utilizados de
                                acuerdo con las instrucciones de seguridad. NubePop no se hace
                                responsable por el mal uso de los productos ni por los efectos
                                derivados del consumo, los cuales son responsabilidad exclusiva del
                                usuario.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-secondary text-sm">
                                    04
                                </span>
                                Pedidos y Entregas
                            </h2>
                            <p>
                                Nos reservamos el derecho de rechazar cualquier pedido. Los tiempos
                                de entrega son estimativos y pueden variar según la ubicación y la
                                logística de terceros. NubePop hará todo lo posible por cumplir con
                                los plazos prometidos.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-secondary text-sm">
                                    05
                                </span>
                                Política de Cambios y Devoluciones
                            </h2>
                            <p>
                                Debido a la naturaleza de nuestros productos (higiene y consumo), no
                                se aceptarán devoluciones de productos abiertos o usados, a menos
                                que presenten un defecto de fábrica comprobable dentro de las 48
                                horas posteriores a la recepción.
                            </p>
                        </section>
                    </motion.div>

                    {/* Back to Home Link */}
                    <motion.div variants={fadeInUp} className="mt-12 text-center">
                        <a
                            href="/"
                            className="text-zinc-500 hover:text-white transition-colors underline underline-offset-8 decoration-secondary/50"
                        >
                            Volver al Inicio
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </main>
    )
}

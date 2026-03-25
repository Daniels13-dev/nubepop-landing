"use client"

import Navbar from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp } from "@/lib/animations"
import { ShieldCheck, Eye, Lock, Globe } from "lucide-react"

export default function PrivacyPage() {
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
                        <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6 border border-primary/20">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Política de <span className="text-primary">Privacidad</span>
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
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-primary text-sm">
                                    01
                                </span>
                                Información que Recopilamos
                            </h2>
                            <p>
                                En NubePop valoramos profundamente su privacidad. Recopilamos
                                información básica necesaria para procesar pedidos, como nombre,
                                dirección de envío y datos de contacto, los cuales son
                                proporcionados voluntariamente por el usuario.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-primary text-sm">
                                    02
                                </span>
                                Uso de los Datos
                            </h2>
                            <div className="text-zinc-300">
                                Sus datos personales se utilizan exclusivamente para:
                                <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
                                    <li>Procesar sus pedidos y gestionar envíos.</li>
                                    <li>
                                        Enviar actualizaciones de estado de compra por WhatsApp o
                                        correo.
                                    </li>
                                    <li>
                                        Mejorar nuestra oferta de productos basada en preferencias
                                        de navegación.
                                    </li>
                                    <li>Cumplir con las normativas legales de mayoría de edad.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-primary text-sm">
                                    03
                                </span>
                                Seguridad y Confidencialidad
                            </h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para
                                proteger su información contra pérdida, acceso no autorizado o
                                alteración. No vendemos ni compartimos sus datos personales con
                                terceros para fines comerciales externos.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-primary text-sm">
                                    04
                                </span>
                                Consentimiento del Usuario
                            </h2>
                            <p>
                                Al utilizar este sitio, el usuario otorga el consentimiento expreso
                                para el tratamiento de sus datos de acuerdo con esta Política de
                                Privacidad. NubePop se reserva el derecho de modificar esta política
                                en cualquier momento para adaptarla a cambios legislativos o mejoras
                                tecnológicas.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-primary text-sm">
                                    05
                                </span>
                                Sus Derechos
                            </h2>
                            <p>
                                El usuario tiene derecho a acceder, rectificar o cancelar el uso de
                                sus datos personales. Para ejercer estos derechos, puede ponerse en
                                contacto con nuestro equipo de atención al cliente a través de los
                                canales oficiales.
                            </p>
                        </section>
                    </motion.div>

                    {/* Back to Home Link */}
                    <motion.div variants={fadeInUp} className="mt-12 text-center">
                        <a
                            href="/"
                            className="text-zinc-500 hover:text-white transition-colors underline underline-offset-8 decoration-primary/50"
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

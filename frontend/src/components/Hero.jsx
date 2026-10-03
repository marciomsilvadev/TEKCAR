import { motion, useScroll, useTransform } from 'framer-motion';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { PHOTOS, WA_DEFAULT } from '../data/site';

const MaskedLine = ({ children, delay, className = '' }) => (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
            className={`block ${className}`}
            initial={{ y: '112%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 900], [0, 160]);
    const fade = useTransform(scrollY, [0, 500], [1, 0.35]);

    return (
        <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden" data-testid="hero-section">
            <motion.div style={{ y: bgY }} className="absolute inset-0">
                <motion.img
                    src={PHOTOS.hero}
                    alt="Mecânico trabalhando na oficina Teck Car"
                    fetchPriority="high"
                    className="h-[115%] w-full object-cover"
                    initial={{ scale: 1.1, opacity: 0.4 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />

            <motion.div style={{ opacity: fade }} className="container-x relative z-10 pb-20 pt-36 sm:pb-24">
                <motion.p
                    data-testid="hero-eyebrow-tag"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-7 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400"
                >
                    <span className="h-px w-9 bg-brand" />
                    Oficina Automotiva • Porto Alegre
                </motion.p>

                <h1
                    data-testid="hero-main-title"
                    className="max-w-4xl font-display text-[clamp(3rem,8.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[0.005em] text-white"
                >
                    <MaskedLine delay={0.3}>Mecânica de Alta Precisão.</MaskedLine>
                    <MaskedLine delay={0.42} className="text-brand">
                        Transparência e Tecnologia em Porto Alegre.
                    </MaskedLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-zinc-400 sm:text-base"
                >
                    Diagnóstico computadorizado, manutenção preventiva e serviços executados com padrão
                    técnico — orçamento claro e comunicação direta, do início ao fim.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                    <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-schedule-revision-button"
                        className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg bg-brand px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_34px_-10px_rgba(229,37,42,0.55)]"
                    >
                        <CalendarCheck size={17} />
                        Agendar Revisão
                    </a>
                    <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-button"
                        className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg border border-white/[0.16] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]"
                    >
                        <MessageCircle size={17} />
                        Falar pelo WhatsApp
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute bottom-8 right-8 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:flex"
            >
                Scroll
                <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="block h-7 w-px bg-zinc-600"
                />
            </motion.div>
        </section>
    );
};

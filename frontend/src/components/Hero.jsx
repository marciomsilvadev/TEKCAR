import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CalendarCheck, MessageCircle, ShieldCheck, Wrench, Cpu } from 'lucide-react';
import { CONTACT, HERO_VIDEOS, PHOTOS, WA_DEFAULT, whatsappLink } from '../data/site';

export const Hero = () => {
    const shouldReduceMotion = useReducedMotion();
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 800], [0, 100]);
    const fade = useTransform(scrollY, [0, 450], [1, 0.4]);
    const videoRef = useRef(null);

    // Alternância suave entre os vídeos reais da TekCar a cada nova visita/sessão
    const [videoIdx] = useState(() => {
        try {
            const saved = sessionStorage.getItem('tekcar_hero_video_idx');
            return saved !== null ? Number(saved) % HERO_VIDEOS.length : 0;
        } catch {
            return 0;
        }
    });

    useEffect(() => {
        try {
            sessionStorage.setItem('tekcar_hero_video_idx', String((videoIdx + 1) % HERO_VIDEOS.length));
        } catch {}
    }, [videoIdx]);

    useEffect(() => {
        if (!shouldReduceMotion && videoRef.current) {
            videoRef.current.play?.().catch(() => {});
        }
    }, [shouldReduceMotion, videoIdx]);

    const activeVideo = HERO_VIDEOS[videoIdx] || HERO_VIDEOS[0];

    return (
        <section
            id="inicio"
            className="relative flex min-h-[96svh] lg:min-h-[100svh] items-end overflow-hidden bg-[#0A0D12]"
            data-testid="hero-section"
            aria-label="Abertura — TekCar Mecânica de Alta Precisão"
        >
            {/* Background Video com tratamento cinematográfico atmosférico */}
            <motion.div
                style={shouldReduceMotion ? undefined : { y: bgY }}
                className="absolute inset-0 pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                {!shouldReduceMotion ? (
                    <video
                        ref={videoRef}
                        poster={PHOTOS.hero}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        data-testid="hero-background-video"
                        className="h-[112%] w-full object-cover transition-opacity duration-1000"
                        style={{
                            objectPosition: activeVideo.pos,
                            filter: 'brightness(0.62) contrast(1.08) saturate(0.82)',
                        }}
                    >
                        <source src={activeVideo.mp4} type="video/mp4" />
                        <source src={activeVideo.webm} type="video/webm" />
                    </video>
                ) : (
                    <img
                        src={PHOTOS.hero}
                        alt="Oficina TekCar"
                        className="h-full w-full object-cover"
                        style={{ filter: 'brightness(0.6) contrast(1.08) saturate(0.8)' }}
                    />
                )}
            </motion.div>

            {/* Tratamento de cor e contraste: gradientes direcionais discretos sobre o vídeo */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/85 to-[#0A0D12]/30 pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-transparent pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-[#0A0D12]/30 pointer-events-none"
                aria-hidden="true"
            />

            {/* Conteúdo Principal do Hero — Alinhamento forte à esquerda com ritmo editorial */}
            <motion.div
                style={shouldReduceMotion ? undefined : { opacity: fade }}
                className="container-x relative z-10 w-full pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
            >
                <div className="max-w-3xl">
                    {/* Overline técnico de precisão */}
                    <motion.div
                        data-testid="hero-eyebrow-tag"
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400"
                    >
                        <span className="h-px w-7 bg-[#E5252A]" aria-hidden="true" />
                        <span>Oficina Automotiva • Porto Alegre</span>
                    </motion.div>

                    {/* Título Principal Editorial */}
                    <h1
                        data-testid="hero-main-title"
                        className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-bold uppercase leading-[0.96] tracking-tight text-white"
                    >
                        <span className="block">Mecânica de</span>
                        <span className="block">Alta Precisão.</span>
                        <span className="mt-2 block text-[#E5252A] text-[clamp(1.75rem,4.8vw,3.75rem)] font-bold tracking-tight normal-case">
                            Transparência e Tecnologia em Porto Alegre.
                        </span>
                    </h1>

                    {/* Texto comercial de suporte preservado */}
                    <motion.p
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-zinc-300 sm:text-[17px] sm:leading-relaxed"
                    >
                        Diagnóstico computadorizado de ponta, peças com procedência garantida e atendimento
                        transparente com envio de fotos e vídeos no seu WhatsApp. Seu veículo tratado com o rigor técnico
                        que a engenharia moderna exige.
                    </motion.p>

                    {/* CTAs Principais — Botões com touch targets confortáveis */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                    >
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-schedule-revision-button"
                            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg bg-[#E5252A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#C81E23] hover:shadow-[0_12px_28px_-8px_rgba(229,37,42,0.55)] active:translate-y-0.5"
                        >
                            <CalendarCheck size={18} aria-hidden="true" />
                            <span>Agendar Revisão</span>
                        </a>

                        <a
                            href={whatsappLink('Olá! Gostaria de tirar uma dúvida sobre manutenção na TekCar.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-button"
                            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/[0.04] px-7 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/[0.09]"
                        >
                            <MessageCircle size={18} className="text-zinc-300" aria-hidden="true" />
                            <span>Falar pelo WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* Indicadores técnicos de rigor — Composição minimalista sem cards ou caixas */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400"
                    >
                        <div className="flex items-center gap-2">
                            <Cpu size={14} className="text-[#E5252A] shrink-0" aria-hidden="true" />
                            <span>Diagnóstico Eletrônico OEM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-[#E5252A] shrink-0" aria-hidden="true" />
                            <span>Garantia Total em Peças</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wrench size={14} className="text-[#E5252A] shrink-0" aria-hidden="true" />
                            <span>Orçamento Claro sem Surpresas</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator — Discreto e sutil no canto inferior direito */}
            <div
                aria-hidden="true"
                className="absolute bottom-6 right-8 hidden items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 lg:flex"
            >
                <span>Scroll</span>
                <span className="block h-5 w-px bg-zinc-700" />
            </div>
        </section>
    );
};

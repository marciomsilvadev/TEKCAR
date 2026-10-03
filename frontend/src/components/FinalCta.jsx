import { CalendarCheck, MessageCircle } from 'lucide-react';
import { PHOTOS, WA_DEFAULT } from '../data/site';
import { Reveal } from './Reveal';

export const FinalCta = () => (
    <section className="relative overflow-hidden border-t border-white/[0.06]" aria-label="Agende sua revisão">
        <img
            src={PHOTOS.ctaBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

        <div className="container-x relative py-28 text-center lg:py-36">
            <Reveal>
                <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.02] text-white">
                    Seu carro merece um <span className="text-brand">diagnóstico preciso.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-zinc-400">
                    Agende sua revisão e conte com uma equipe preparada para cuidar do seu veículo.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                    <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-cta-agendar-button"
                        className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg bg-brand px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_34px_-10px_rgba(229,37,42,0.55)]"
                    >
                        <CalendarCheck size={17} /> Agendar Revisão
                    </a>
                    <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-cta-whatsapp-button"
                        className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg border border-white/[0.16] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]"
                    >
                        <MessageCircle size={17} /> Falar pelo WhatsApp
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
);

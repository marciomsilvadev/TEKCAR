import { CalendarCheck, Phone } from 'lucide-react';
import { CONTACT, PHOTOS, WA_DEFAULT } from '../data/site';
import { Reveal } from './Reveal';

export const FinalCta = () => (
    <section
        className="relative overflow-hidden bg-[#0A0D12] border-t border-white/[0.08]"
        aria-label="Agendamento final de revisão"
    >
        {/* Imagem de Fundo Atmosférica com Sobreposição Cinematográfica */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
            <img
                src={PHOTOS.ctaBackground}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-center opacity-25 filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12] via-[#0A0D12]/90 to-[#0A0D12]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-transparent to-[#0A0D12]" />
        </div>

        <div className="container-x relative z-10 py-24 sm:py-28 lg:py-36 text-center">
            <Reveal>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-zinc-400 mb-4">
                    <span className="h-px w-6 bg-[#E5252A]" aria-hidden="true" />
                    <span>PRECISÃO E CONFIANÇA EM PORTO ALEGRE</span>
                    <span className="h-px w-6 bg-[#E5252A]" aria-hidden="true" />
                </div>

                <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold uppercase leading-[1.0] tracking-tight text-white">
                    Seu carro merece um <span className="text-[#E5252A]">diagnóstico preciso.</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-zinc-300">
                    Evite surpresas e gastos desnecessários na estrada. Agende uma revisão preventiva
                    com os especialistas da TekCar e receba transparência total no seu WhatsApp.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                        href={WA_DEFAULT}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-cta-agendar-button"
                        className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg bg-[#E5252A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#C81E23] hover:shadow-[0_12px_32px_-8px_rgba(229,37,42,0.6)] active:translate-y-0.5"
                    >
                        <CalendarCheck size={18} aria-hidden="true" />
                        <span>Agendar Revisão pelo WhatsApp</span>
                    </a>

                    <a
                        href={`tel:${CONTACT.phoneRaw}`}
                        data-testid="final-cta-phone-button"
                        className="inline-flex h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/[0.04] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08]"
                    >
                        <Phone size={16} className="text-[#E5252A]" aria-hidden="true" />
                        <span>Ligar: {CONTACT.phoneDisplay}</span>
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
);

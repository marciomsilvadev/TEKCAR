import { CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS, PHOTOS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Differentials = () => (
    <section
        id="diferenciais"
        className="py-24 lg:py-32 bg-[#0F141C] border-t border-white/[0.08]"
        aria-label="Diferenciais e transparência da TECK CAR"
        data-testid="differentials-section"
    >
        <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Narrativa e Pilares de Diferencial */}
                <div className="lg:col-span-6">
                    <Reveal>
                        <Eyebrow>DIFERENCIAIS DE OFICINA</Eyebrow>
                        <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                            Por que confiar seu carro <span className="text-[#E5252A]">à TECK CAR?</span>
                        </h2>
                        <p className="mt-5 text-[15.5px] leading-relaxed text-zinc-300">
                            Construímos uma relação sólida através de fatos e transparência: você entende exatamente o que
                            seu veículo precisa, acompanha fotos de cada etapa pelo WhatsApp e só paga pelo que foi expressamente autorizado.
                        </p>
                    </Reveal>

                    <div className="mt-10 space-y-6">
                        {DIFFERENTIALS.map((item, index) => (
                            <Reveal key={item.num} delay={0.08 * index}>
                                <div
                                    className="border-l-2 border-white/[0.12] pl-5 py-2 transition-colors hover:border-[#E5252A]"
                                    data-testid={item.testid}
                                >
                                    <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#E5252A] tracking-wider uppercase">
                                        <span>{item.num}.</span>
                                        <span>{item.tag}</span>
                                    </div>
                                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-300 font-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Fotografia Técnica de Apoio com Tratamento Editorial */}
                <div className="lg:col-span-6">
                    <Reveal delay={0.15} testid="differentials-photo">
                        <div className="relative">
                            {/* Moldura técnica minimalista */}
                            <div className="relative overflow-hidden rounded-lg border border-white/[0.12] shadow-2xl">
                                <img
                                    src={PHOTOS.differentials}
                                    alt="Mecânico especializado realizando inspeção e diagnóstico de precisão"
                                    loading="lazy"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/80 via-transparent to-transparent pointer-events-none"
                                    aria-hidden="true"
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-mono">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-[#E5252A]" aria-hidden="true" />
                                        <span>Diagnóstico & Montagem Técnica</span>
                                    </span>
                                    <span className="text-zinc-400">TECK CAR POA</span>
                                </div>
                            </div>

                            {/* Detalhe de precisão mecânica */}
                            <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 font-mono border-t border-white/[0.06] pt-3">
                                <span>FERRAMENTAL CALIBRADO</span>
                                <span>TORQUE ESPECIFICADO</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);

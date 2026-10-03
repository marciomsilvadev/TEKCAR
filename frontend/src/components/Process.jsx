import { PROCESS_STEPS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Process = () => (
    <section
        id="processo"
        className="py-24 lg:py-32 bg-[#0F141C] border-t border-white/[0.08]"
        aria-label="Processo de atendimento na TECK CAR"
    >
        <div className="container-x">
            {/* Header da Seção */}
            <div className="max-w-2xl pb-14">
                <Reveal>
                    <Eyebrow>COMO FUNCIONA</Eyebrow>
                    <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                        Do diagnóstico preciso <span className="text-[#E5252A]">à entrega técnica.</span>
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">
                        Um fluxo claro, transparente e sem burocracia para você acompanhar cada etapa do serviço no seu carro.
                    </p>
                </Reveal>
            </div>

            {/* Timeline Contínua de 4 Passos */}
            <div className="relative">
                {/* Linha horizontal conectora no desktop */}
                <div
                    className="absolute top-6 left-0 right-0 hidden lg:block h-px bg-white/[0.12]"
                    aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {PROCESS_STEPS.map((step, index) => (
                        <Reveal
                            key={step.step}
                            delay={0.08 * index}
                            testid={step.testid}
                            className="relative flex flex-col pt-2"
                        >
                            {/* Ponto indicador de precisão */}
                            <div className="flex items-center gap-3">
                                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#0F141C] border border-[#E5252A] text-xs font-mono font-bold text-white shadow-[0_0_12px_rgba(229,37,42,0.25)]">
                                    {step.step}
                                </span>
                                <span className="lg:hidden h-px flex-1 bg-white/[0.1]" aria-hidden="true" />
                            </div>

                            {/* Conteúdo do Passo */}
                            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                                {step.title}
                            </h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-zinc-300 font-normal">
                                {step.desc}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

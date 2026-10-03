import { PROCESS_STEPS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Process = () => (
    <section id="processo" className="border-t border-white/[0.06] py-24 lg:py-32" aria-label="Processo de atendimento">
        <div className="container-x">
            <Reveal>
                <Eyebrow>Processo</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                    Do diagnóstico à entrega.
                </h2>
            </Reveal>

            <div className="relative mt-16">
                <span className="absolute left-0 right-0 top-[5px] hidden h-px bg-white/[0.08] lg:block" />
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {PROCESS_STEPS.map((step, i) => (
                        <Reveal key={step.num} delay={0.09 * i} testid={step.testid}>
                            <div>
                                <span className="relative z-10 block h-[11px] w-[11px] rounded-full border border-brand bg-ink">
                                    <span className="absolute inset-[2.5px] rounded-full bg-brand" />
                                </span>
                                <p className="mt-6 font-mono text-[12px] text-brand">{step.num}</p>
                                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

import { ArrowRight, Cpu, Disc3, Droplets, Route, SlidersHorizontal, Snowflake } from 'lucide-react';
import { SERVICES, whatsappLink } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

const ICONS = { Cpu, Disc3, Droplets, Route, SlidersHorizontal, Snowflake };

export const Services = () => (
    <section id="servicos" className="py-24 lg:py-32" aria-label="Serviços">
        <div className="container-x">
            <Reveal>
                <Eyebrow>Serviços</Eyebrow>
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                    Serviços Automotivos Especializados
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                    Diagnóstico preciso, manutenção preventiva e soluções completas para o seu veículo.
                </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {SERVICES.map((s, i) => {
                    const Icon = ICONS[s.icon];
                    return (
                        <Reveal key={s.id} delay={0.06 * i} testid={s.testid}>
                            <a
                                href={whatsappLink(`Olá! Gostaria de saber mais sobre ${s.title}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex h-full flex-col rounded-xl border border-white/[0.07] bg-ink-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-ink-raised"
                                data-testid={`${s.testid}-link`}
                            >
                                <span className="absolute left-0 top-8 h-8 w-[2.5px] scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" />
                                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.09] text-zinc-400 transition-colors duration-300 group-hover:border-brand/40 group-hover:text-brand">
                                    <Icon size={19} strokeWidth={1.6} />
                                </span>
                                <h3 className="mt-6 font-display text-[22px] font-semibold leading-tight text-white">
                                    {s.title}
                                </h3>
                                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-500">
                                    {s.desc}
                                </p>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-zinc-400 transition-colors group-hover:text-white">
                                    Saiba mais
                                    <ArrowRight
                                        size={13}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand"
                                    />
                                </span>
                            </a>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

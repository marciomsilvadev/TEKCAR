import { DIFFERENTIALS, PHOTOS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Differentials = () => (
    <section id="sobre" className="border-t border-white/[0.06] py-24 lg:py-32" aria-label="Sobre a Teck Car">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
                <Reveal>
                    <Eyebrow>Sobre Nós</Eyebrow>
                    <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                        Por que confiar seu carro <span className="text-brand">à Teck Car?</span>
                    </h2>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                        Acreditamos que uma boa relação começa pela verdade: explicar o que o carro
                        realmente precisa, mostrar o porquê de cada serviço e entregar no prazo
                        combinado. É assim que construímos confiança — carro por carro.
                    </p>
                </Reveal>

                <div className="mt-10">
                    {DIFFERENTIALS.map((d, i) => (
                        <Reveal key={d.num} delay={0.08 * i}>
                            <div
                                className="flex gap-6 border-t border-white/[0.07] py-7 last:border-b"
                                data-testid={d.testid}
                            >
                                <span className="font-mono text-[12px] text-brand">{d.num}</span>
                                <div>
                                    <h3 className="font-display text-xl font-semibold text-white">{d.title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{d.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <Reveal className="lg:col-span-6" delay={0.15} testid="differentials-photo">
                <div className="relative">
                    <div className="absolute -right-3 -top-3 h-full w-full rounded-xl border border-brand/25" />
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src={PHOTOS.differentials}
                            alt="Mecânico da Teck Car realizando diagnóstico de precisão"
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                        />
                    </div>
                    <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.24em] text-zinc-600">
                        Diagnóstico de precisão — Teck Car
                    </p>
                </div>
            </Reveal>
        </div>
    </section>
);

import { Check } from 'lucide-react';
import { OFFICE_PHOTOS, STRUCTURE_POINTS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Structure = () => (
    <section id="estrutura" className="border-t border-white/[0.06] py-24 lg:py-32" aria-label="Estrutura da oficina">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="order-2 lg:order-1 lg:col-span-6" testid="structure-section-photo">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 overflow-hidden rounded-xl">
                        <img
                            src={OFFICE_PHOTOS.liftRedCar}
                            alt="Veículo elevado na oficina Teck Car"
                            loading="lazy"
                            className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={OFFICE_PHOTOS.engineBay}
                                alt="Motor em manutenção na Teck Car"
                                loading="lazy"
                                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={OFFICE_PHOTOS.liftSedan}
                                alt="Sedan em elevador hidráulico na Teck Car"
                                loading="lazy"
                                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.24em] text-zinc-600">
                    Fotos reais da nossa estrutura
                </p>
            </Reveal>

            <div className="order-1 lg:order-2 lg:col-span-6">
                <Reveal>
                    <Eyebrow>Estrutura</Eyebrow>
                    <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                        Tecnologia para cuidar <span className="text-brand">do seu carro.</span>
                    </h2>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                        Uma oficina preparada para a eletrônica e a mecânica dos veículos de hoje —
                        equipamentos, elevadores e ferramental organizados para executar cada serviço
                        com competência técnica.
                    </p>
                </Reveal>
                <ul className="mt-9 space-y-4">
                    {STRUCTURE_POINTS.map((p, i) => (
                        <Reveal key={p} delay={0.07 * i}>
                            <li className="flex items-start gap-3.5 text-[14.5px] text-zinc-300">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/35">
                                    <Check size={11} className="text-brand" />
                                </span>
                                {p}
                            </li>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

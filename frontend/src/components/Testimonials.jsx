import { ArrowUpRight, Star } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Testimonials = () => (
    <section id="avaliacoes" className="border-t border-white/[0.06] py-24 lg:py-32" aria-label="Avaliações de clientes">
        <div className="container-x">
            <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <Eyebrow>Avaliações</Eyebrow>
                        <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                            O que nossos clientes dizem
                        </h2>
                        <p className="mt-4 max-w-xl text-[15px] text-zinc-400">
                            Reputação construída no Google, atendimento por atendimento.
                        </p>
                    </div>
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="see-all-google-reviews"
                        className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-zinc-300 transition-colors hover:text-white"
                    >
                        Ver todas as avaliações no Google
                        <ArrowUpRight size={14} className="text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <Reveal key={t.name} delay={0.08 * i} testid={t.testid}>
                        <figure className="flex h-full flex-col rounded-xl border border-white/[0.07] bg-ink-soft p-8 transition-colors duration-300 hover:border-white/[0.14]">
                            <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star key={s} size={13} className="fill-brand text-brand" />
                                ))}
                            </div>
                            <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed text-zinc-300">
                                “{t.text}”
                            </blockquote>
                            <figcaption className="mt-7 flex items-center gap-3.5 border-t border-white/[0.06] pt-5">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] font-display text-sm font-semibold text-zinc-300">
                                    {t.initial}
                                </span>
                                <span>
                                    <span className="block text-[13.5px] font-medium text-white">{t.name}</span>
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                        Avaliação no Google
                                    </span>
                                </span>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

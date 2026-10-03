import { ArrowUpRight, Star } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Testimonials = () => (
    <section
        id="avaliacoes"
        className="py-24 lg:py-32 bg-[#0A0D12] border-t border-white/[0.08]"
        aria-label="Avaliações reais de clientes no Google"
    >
        <div className="container-x">
            {/* Header da Seção de Avaliações */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-white/[0.08]">
                <Reveal>
                    <Eyebrow>REPUTAÇÃO VERIFICADA</Eyebrow>
                    <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                        O que dizem os clientes <span className="text-[#E5252A]">em Porto Alegre.</span>
                    </h2>
                    <p className="mt-3 text-[15px] text-zinc-300">
                        Opiniões reais registradas publicamente no perfil oficial da oficina no Google.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="see-all-google-reviews"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
                        aria-label="Ver todas as mais de 320 avaliações no perfil do Google Maps"
                    >
                        <span>Ver todas as avaliações no Google</span>
                        <ArrowUpRight
                            size={16}
                            className="text-[#E5252A] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </a>
                </Reveal>
            </div>

            {/* Lista Editorial de Depoimentos Reais */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {TESTIMONIALS.map((review, index) => (
                    <Reveal
                        key={review.name}
                        delay={0.08 * index}
                        testid={review.testid}
                        className="flex flex-col justify-between border border-white/[0.08] bg-[#0F141C] p-7 sm:p-8 rounded-lg transition-colors hover:border-white/[0.18]"
                    >
                        <div>
                            {/* Estrelas do Google */}
                            <div className="flex items-center gap-1" aria-label="Avaliação 5 estrelas">
                                {Array.from({ length: review.stars }).map((_, s) => (
                                    <Star
                                        key={s}
                                        size={14}
                                        className="fill-[#E5252A] text-[#E5252A]"
                                        aria-hidden="true"
                                    />
                                ))}
                                <span className="ml-2 font-mono text-xs text-zinc-400">5.0</span>
                            </div>

                            {/* Citação Real */}
                            <blockquote className="mt-5 text-[15px] leading-relaxed text-zinc-200 font-normal">
                                “{review.text}”
                            </blockquote>
                        </div>

                        {/* Identificação do Cliente */}
                        <figcaption className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                            <div>
                                <p className="font-display text-lg font-bold text-white tracking-wide">
                                    {review.name}
                                </p>
                                <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                                    {review.vehicle}
                                </p>
                            </div>
                            <span className="font-mono text-xs text-zinc-400">
                                {review.time}
                            </span>
                        </figcaption>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

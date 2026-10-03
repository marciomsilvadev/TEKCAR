import { Star } from 'lucide-react';
import { TRUST_ITEMS } from '../data/site';
import { Reveal } from './Reveal';

export const TrustBar = () => (
    <section className="border-b border-white/[0.06]" aria-label="Prova de confiança">
        <div className="container-x">
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {TRUST_ITEMS.map((item, i) => (
                    <Reveal
                        key={item.label}
                        delay={i * 0.08}
                        className={`py-9 pr-6 lg:py-12 ${i > 0 ? 'lg:pl-10 lg:border-l lg:border-white/[0.07]' : ''}`}
                        testid={item.testid}
                    >
                        <p className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl">
                            {item.prefix && <span className="text-brand">{item.prefix} </span>}
                            {item.value}
                        </p>
                        {item.stars ? (
                            <span className="mt-3 flex gap-1" aria-label="5 estrelas no Google">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star key={s} size={11} className="fill-brand text-brand" />
                                ))}
                            </span>
                        ) : (
                            <span className="mt-3 block" />
                        )}
                        <p className="mt-1.5 text-[13px] text-zinc-500">{item.label}</p>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

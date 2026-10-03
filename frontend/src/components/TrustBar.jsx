import { Star, ShieldCheck, Camera, Award } from 'lucide-react';
import { TRUST_ITEMS } from '../data/site';
import { Reveal } from './Reveal';

const TRUST_ICONS = {
    'trust-metric-google-rating': Star,
    'trust-metric-experience': Award,
    'trust-metric-transparency': Camera,
    'trust-metric-guarantee': ShieldCheck,
};

export const TrustBar = () => (
    <section
        className="relative z-10 border-y border-white/[0.08] bg-[#0F141C]"
        aria-label="Prova de confiança e credenciais"
    >
        <div className="container-x">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                {TRUST_ITEMS.map((item, index) => {
                    const Icon = TRUST_ICONS[item.testid] || ShieldCheck;
                    const content = (
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-none">
                                    {item.value}
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-zinc-400 group-hover:text-[#E5252A] group-hover:border-[#E5252A]/40 transition-colors">
                                    <Icon size={16} aria-hidden="true" />
                                </span>
                            </div>

                            <div className="mt-4">
                                {item.stars && (
                                    <div className="mb-2 flex gap-1" aria-label="5 estrelas de avaliação">
                                        {Array.from({ length: 5 }).map((_, s) => (
                                            <Star
                                                key={s}
                                                size={12}
                                                className="fill-[#E5252A] text-[#E5252A]"
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                )}
                                <p className="text-[14px] font-medium text-zinc-200">
                                    {item.label}
                                </p>
                                <p className="mt-0.5 text-xs text-zinc-400 font-normal">
                                    {item.sublabel}
                                </p>
                            </div>
                        </div>
                    );

                    return (
                        <Reveal
                            key={item.label}
                            delay={index * 0.08}
                            className="py-7 px-4 sm:px-6 lg:py-8 lg:px-7"
                            testid={item.testid}
                        >
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`${item.testid}-link`}
                                    className="group block h-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5252A]"
                                    aria-label={`${item.value} ${item.label} — ${item.sublabel}`}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div className="h-full">
                                    {content}
                                </div>
                            )}
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

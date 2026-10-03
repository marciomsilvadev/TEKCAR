const ITEMS = [
    'Diagnóstico Computadorizado',
    'Freios e ABS',
    'Suspensão e Direção',
    'Revisão Pré-Viagem',
    'Troca de Óleo e Filtros',
    'Climatização e Higienização',
];

const Track = ({ ariaHidden }) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-2xl font-medium tracking-wide text-zinc-600">
                    {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-brand/70" />
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div className="overflow-hidden border-y border-white/[0.06] bg-ink-soft/60 py-6" data-testid="services-marquee">
        <div className="flex w-max animate-marquee">
            <Track ariaHidden={false} />
            <Track ariaHidden={true} />
        </div>
    </div>
);

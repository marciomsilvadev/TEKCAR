const ITEMS = [
    'Diagnóstico Computadorizado',
    'Freios & ABS',
    'Suspensão',
    'Revisão Preventiva',
    'Troca de Óleo',
    'Injeção Direta & Motor',
    'Inspeção Técnica de 40 Itens',
];

const Track = ({ ariaHidden }) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
        {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="whitespace-nowrap px-7 font-display text-lg sm:text-xl font-bold tracking-wider uppercase text-zinc-500">
                    {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-[#E5252A]/70" aria-hidden="true" />
            </span>
        ))}
    </div>
);

export const Marquee = () => (
    <div
        className="overflow-hidden border-y border-white/[0.08] bg-[#07090D] py-4 select-none"
        data-testid="services-marquee"
        aria-hidden="true"
    >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
            <Track ariaHidden={false} />
            <Track ariaHidden={true} />
        </div>
    </div>
);

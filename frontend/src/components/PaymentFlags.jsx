export const PaymentFlags = ({ className = '' }) => (
    <div className={`flex items-center flex-wrap gap-2 ${className}`} aria-label="Bandeiras de cartões aceitas">
        {/* Visa */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-white shadow-sm overflow-hidden p-1 transition-transform hover:scale-105"
            title="Visa"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="Visa">
                <path
                    d="M19.5 22h-3.2l2-12h3.2l-2 12zm8.7-11.8c-.6-.2-1.6-.4-2.8-.4-3.1 0-5.3 1.6-5.3 3.9 0 1.7 1.6 2.7 2.8 3.2 1.2.6 1.7 1 1.7 1.5 0 .8-1 1.2-1.9 1.2-1.3 0-2-.2-3.1-.7l-.4-.2-.5 2.8c.8.4 2.2.7 3.7.7 3.3 0 5.5-1.6 5.5-4 0-1.3-.8-2.4-2.7-3.2-1.1-.6-1.8-.9-1.8-1.5 0-.5.6-1 1.8-1 1 0 1.8.2 2.4.5l.3.1.6-2.4zm8.6 3.8c.3-.7 1.3-3.6 1.3-3.6-.0.1.3-.7.4-1.2h-2.9c-.4 0-.7.2-.8.6l-2.6 12.2h3.3l.7-1.8h4.1l.4 1.8h2.9l-2.8-12zm-3.6 5.8l1.7-4.6.9 4.6h-2.6zm-19-9.8l-3.1 8.2-.3-1.6c-.6-2-2.3-4.2-4.3-5.2l2.8 10.6h3.4l5.1-12h-3.6z"
                    fill="#1A1F71"
                />
            </svg>
        </div>

        {/* Mastercard */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-white shadow-sm overflow-hidden p-0.5 transition-transform hover:scale-105"
            title="Mastercard"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="Mastercard">
                <circle cx="18" cy="16" r="9" fill="#EB001B" />
                <circle cx="30" cy="16" r="9" fill="#F79E1B" />
                <path
                    d="M24 9.8a8.96 8.96 0 013.4 6.2 8.96 8.96 0 01-3.4 6.2 8.96 8.96 0 01-3.4-6.2 8.96 8.96 0 013.4-6.2z"
                    fill="#FF5F00"
                />
            </svg>
        </div>

        {/* Elo */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-[#0A0D12] border border-white/20 shadow-sm overflow-hidden p-1 transition-transform hover:scale-105"
            title="Elo"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="Elo">
                <circle cx="16" cy="12" r="3.5" fill="#E62727" />
                <circle cx="24" cy="12" r="3.5" fill="#00A4E4" />
                <circle cx="32" cy="12" r="3.5" fill="#F4AF00" />
                <text
                    x="24"
                    y="25"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="9"
                    fontWeight="800"
                    fontFamily="Outfit, sans-serif"
                    letterSpacing="0.05em"
                >
                    elo
                </text>
            </svg>
        </div>

        {/* Hipercard */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-[#A61A14] shadow-sm overflow-hidden p-1 transition-transform hover:scale-105"
            title="Hipercard"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="Hipercard">
                <text
                    x="24"
                    y="19"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="7"
                    fontStyle="italic"
                    fontWeight="900"
                    fontFamily="sans-serif"
                    letterSpacing="-0.02em"
                >
                    Hipercard
                </text>
            </svg>
        </div>

        {/* American Express */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-[#0077A6] shadow-sm overflow-hidden p-1 transition-transform hover:scale-105"
            title="American Express"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="American Express">
                <text
                    x="24"
                    y="19"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="sans-serif"
                    letterSpacing="0.06em"
                >
                    AMEX
                </text>
            </svg>
        </div>

        {/* Pix */}
        <div
            className="flex h-7 w-11 items-center justify-center rounded bg-white shadow-sm overflow-hidden p-1 transition-transform hover:scale-105"
            title="Pix"
        >
            <svg viewBox="0 0 48 32" className="h-full w-auto" aria-label="Pix">
                <path
                    d="M20.5 10.8l-4 4a.4.4 0 000 .6l4 4c.8.8 2.2.8 3 0l1-1-2.8-2.8a1.1 1.1 0 010-1.6l2.8-2.8-1-1a2.1 2.1 0 00-3 .6z"
                    fill="#32BCAD"
                />
                <path
                    d="M27.5 10.8l4 4a.4.4 0 010 .6l-4 4a2.1 2.1 0 01-3 0l-1-1 2.8-2.8a1.1 1.1 0 000-1.6l-2.8-2.8 1-1a2.1 2.1 0 013 .6z"
                    fill="#32BCAD"
                />
                <text
                    x="24"
                    y="27"
                    textAnchor="middle"
                    fill="#32BCAD"
                    fontSize="7"
                    fontWeight="800"
                    fontFamily="Outfit, sans-serif"
                >
                    pix
                </text>
            </svg>
        </div>
    </div>
);

import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
    ADDRESS,
    BRAND,
    CONTACT,
    LOGO_IMAGE_URL,
    NAV_LINKS,
    WA_DEFAULT,
    scrollToId,
} from '../data/site';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/[0.06] bg-ink-soft/50">
            <div className="container-x grid gap-12 py-16 md:grid-cols-12">
                <div className="md:col-span-5">
                    {LOGO_IMAGE_URL ? (
                        <img src={LOGO_IMAGE_URL} alt={BRAND.full} className="h-12 w-auto" data-testid="footer-logo-image" />
                    ) : (
                        <span className="font-display text-2xl font-bold tracking-[0.04em] text-white">
                            TECK<span className="text-brand">CAR</span>
                        </span>
                    )}
                    <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-zinc-500">
                        Oficina mecânica em Porto Alegre. Diagnóstico preciso, transparência e
                        tecnologia para cuidar do seu veículo.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            href={BRAND.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-instagram-link"
                            aria-label={`Instagram ${BRAND.instagramHandle}`}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.09] text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
                        >
                            <Instagram size={16} />
                        </a>
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-link"
                            aria-label="WhatsApp da Teck Car"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.09] text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
                        >
                            <MessageCircle size={16} />
                        </a>
                    </div>
                </div>

                <nav className="md:col-span-3" aria-label="Links do rodapé">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-zinc-600">Navegação</p>
                    <ul className="mt-5 space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToId(l.href);
                                    }}
                                    data-testid={`footer-link-${l.href.replace('#', '')}`}
                                    className="text-[13.5px] text-zinc-400 transition-colors hover:text-white"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:col-span-4">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-zinc-600">Contato</p>
                    <ul className="mt-5 space-y-3.5 text-[13.5px] text-zinc-400">
                        <li className="flex items-start gap-3">
                            <MapPin size={14} className="mt-0.5 shrink-0 text-brand" />
                            <span>
                                {ADDRESS.street}
                                <br />
                                {ADDRESS.city}
                            </span>
                        </li>
                        <li>
                            <a href={`tel:${CONTACT.phoneRaw}`} data-testid="footer-phone-link" className="flex items-center gap-3 transition-colors hover:text-white">
                                <Phone size={14} className="shrink-0 text-brand" />
                                {CONTACT.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white">
                                <Instagram size={14} className="shrink-0 text-brand" />
                                {BRAND.instagramHandle}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/[0.05]">
                <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[12px] text-zinc-600 sm:flex-row">
                    <p>© {year} Teck Car — Oficina Mecânica. Todos os direitos reservados.</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em]">Porto Alegre • RS</p>
                </div>
            </div>
        </footer>
    );
};

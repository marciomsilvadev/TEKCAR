import { CreditCard, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
    ADDRESS,
    BRAND,
    CONTACT,
    HOURS,
    LOGO_IMAGE_URL,
    NAV_LINKS,
    PAYMENT_INFO,
    WA_DEFAULT,
    scrollToId,
} from '../data/site';
import { PaymentFlags } from './PaymentFlags';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#07090D] border-t border-white/[0.08]" aria-label="Rodapé do site">
            <div className="container-x py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    {/* Coluna 1: Marca, Resumo e Redes Sociais */}
                    <div className="md:col-span-5">
                        <div className="flex items-center">
                            {LOGO_IMAGE_URL ? (
                                <img
                                    src={LOGO_IMAGE_URL}
                                    alt={BRAND.full}
                                    className="h-11 sm:h-12 w-auto object-contain"
                                    data-testid="footer-logo-image"
                                />
                            ) : (
                                <div className="flex flex-col leading-none">
                                    <span className="font-display text-2xl font-bold tracking-[0.06em] text-white">
                                        {BRAND.nameParts.main}<span className="text-[#E5252A]">{BRAND.nameParts.accent}</span>
                                    </span>
                                    <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                                        Mecânica de Alta Precisão
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
                            Oficina mecânica especializada em Porto Alegre. Diagnóstico computadorizado,
                            revisão preventiva, freios e suspensão com total transparência e rigor técnico.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href={BRAND.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-instagram-link"
                                aria-label={`Perfil oficial no Instagram: ${BRAND.instagramHandle}`}
                                className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-[#E5252A]/40 hover:text-white"
                            >
                                <Instagram size={17} aria-hidden="true" />
                            </a>

                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="footer-whatsapp-link"
                                aria-label="Contato direto pelo WhatsApp da TECK CAR"
                                className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-[#E5252A]/40 hover:text-white"
                            >
                                <MessageCircle size={17} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação Rápida por Âncoras */}
                    <div className="md:col-span-3">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400 mb-5">
                            Navegação
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToId(link.href);
                                        }}
                                        data-testid={`footer-link-${link.href.replace('#', '')}`}
                                        className="transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 3: Endereço e Horários Oficiais */}
                    <div className="md:col-span-4">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400 mb-5">
                            Localização & Contato
                        </p>
                        <div className="space-y-3.5 text-sm text-zinc-400">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-[#E5252A] mt-0.5 shrink-0" aria-hidden="true" />
                                <span>
                                    {ADDRESS.street}
                                    <br />
                                    {ADDRESS.city} • CEP {ADDRESS.cep}
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone size={15} className="text-[#E5252A] shrink-0" aria-hidden="true" />
                                <a
                                    href={`tel:${CONTACT.phoneRaw}`}
                                    data-testid="footer-phone-link"
                                    className="transition-colors hover:text-white font-medium"
                                >
                                    {CONTACT.phoneDisplay}
                                </a>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs space-y-1">
                                <p className="font-mono text-zinc-400 uppercase tracking-wider">Atendimento:</p>
                                <p className="text-zinc-400">Seg a Sex: {HOURS[0].time}</p>
                                <p className="text-zinc-400">Sábado: {HOURS[1].time}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meios de Pagamento & Parcelamento */}
                <div
                    className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6"
                    data-testid="footer-payment-section"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 text-center sm:text-left">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded bg-white/[0.05] border border-white/10 text-[#E5252A]">
                                <CreditCard size={15} aria-hidden="true" />
                            </span>
                            <span className="font-display text-sm uppercase tracking-wider font-bold text-white">
                                Formas de Pagamento
                            </span>
                        </div>
                        <span className="hidden sm:inline text-zinc-600">•</span>
                        <p className="text-xs text-zinc-400">
                            {PAYMENT_INFO.installment} <span className="text-zinc-500">({PAYMENT_INFO.note})</span>.
                        </p>
                    </div>

                    {/* Bandeiras dos Principais Cartões */}
                    <PaymentFlags />
                </div>

                {/* Linha Inferior com Copyright (Sem CNPJ) */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
                    <p>© {currentYear} {BRAND.full}</p>
                    <p>Porto Alegre — RS • Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

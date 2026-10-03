import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X, CalendarCheck } from 'lucide-react';
import { BRAND, CONTACT, LOGO_IMAGE_URL, NAV_LINKS, WA_DEFAULT, scrollToId } from '../data/site';

const BrandWordmark = ({ onClick }) => (
    <button
        onClick={onClick}
        data-testid="navbar-brand-logo"
        className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5252A] rounded shrink-0"
        aria-label={`${BRAND.full} — Voltar ao início`}
    >
        {LOGO_IMAGE_URL ? (
            <img
                src={LOGO_IMAGE_URL}
                alt={BRAND.full}
                className="h-10 sm:h-12 w-auto object-contain"
                data-testid="navbar-logo-image"
            />
        ) : (
            <div className="flex flex-col leading-none">
                <span className="font-display text-[22px] sm:text-[24px] font-bold tracking-[0.06em] text-white">
                    {BRAND.nameParts.main}<span className="text-[#E5252A]">{BRAND.nameParts.accent}</span>
                </span>
                <span className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.32em] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    Alta Precisão • POA
                </span>
            </div>
        )}
    </button>
);

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is active
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    // Handle ESC key to close mobile menu
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            setMobileOpen(false);
        }
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [mobileOpen, handleKeyDown]);

    const handleNavigate = (href) => (e) => {
        e.preventDefault();
        setMobileOpen(false);
        scrollToId(href);
    };

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'border-b border-white/[0.08] bg-[#0A0D12]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                        : 'border-b border-transparent bg-transparent'
                }`}
            >
                <div className="container-x flex h-[76px] sm:h-[82px] items-center justify-between gap-4">
                    <BrandWordmark onClick={handleNavigate('#inicio')} />

                    {/* Desktop Navigation Links */}
                    <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Navegação principal">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleNavigate(link.href)}
                                data-testid={link.testid}
                                className="text-[13px] xl:text-[13.5px] font-medium text-zinc-300 transition-colors duration-200 hover:text-white whitespace-nowrap hover:underline underline-offset-8 decoration-[#E5252A]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Direct Contact & CTA Button */}
                    <div className="hidden items-center gap-4 xl:gap-6 lg:flex shrink-0">
                        <a
                            href={`tel:${CONTACT.phoneRaw}`}
                            data-testid="navbar-phone-action"
                            className="flex items-center gap-2 text-[13.5px] xl:text-[14px] font-medium text-zinc-200 transition-colors hover:text-white whitespace-nowrap shrink-0 px-2 py-1"
                            aria-label={`Ligar para ${CONTACT.phoneDisplay}`}
                        >
                            <Phone size={15} className="text-[#E5252A] shrink-0" aria-hidden="true" />
                            <span className="tracking-normal font-semibold text-white">{CONTACT.phoneDisplay}</span>
                        </a>

                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="navbar-cta-agendar"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#E5252A] px-5 py-2.5 text-[13.5px] font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-300 hover:bg-[#C81E23] hover:shadow-[0_8px_20px_-6px_rgba(229,37,42,0.5)] active:translate-y-0.5"
                        >
                            <CalendarCheck size={15} aria-hidden="true" className="shrink-0" />
                            <span>Agendar Revisão</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden hover:border-white/25 active:bg-white/5 shrink-0"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        data-testid="navbar-mobile-toggle"
                        aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav-drawer"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {/* Mobile Slide-Over Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-nav-drawer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 flex flex-col bg-[#0A0D12]/98 backdrop-blur-xl lg:hidden"
                        data-testid="mobile-menu"
                    >
                        <div className="container-x flex flex-1 flex-col justify-center pt-24 pb-8 overflow-y-auto">
                            <nav className="flex flex-col gap-1 border-b border-white/[0.08] pb-8" aria-label="Menu móvel">
                                {NAV_LINKS.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleNavigate(link.href)}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                                        className="py-3 font-display text-3xl sm:text-4xl font-semibold tracking-wide text-zinc-200 transition-colors hover:text-white"
                                        data-testid={`mobile-${link.testid}`}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="mt-8 flex flex-col gap-3">
                                <a
                                    href={WA_DEFAULT}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="mobile-menu-cta-agendar"
                                    className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#E5252A] text-sm font-semibold text-white active:bg-[#C81E23]"
                                >
                                    <CalendarCheck size={16} aria-hidden="true" />
                                    <span>Agendar Revisão pelo WhatsApp</span>
                                </a>

                                <a
                                    href={`tel:${CONTACT.phoneRaw}`}
                                    data-testid="mobile-menu-phone"
                                    className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] text-sm font-medium text-zinc-200 active:bg-white/10"
                                >
                                    <Phone size={15} className="text-[#E5252A]" aria-hidden="true" />
                                    <span>Ligar: {CONTACT.phoneDisplay}</span>
                                </a>
                            </div>

                            <div className="mt-6 text-center text-xs text-zinc-500 font-mono">
                                Av. Vicente Monteggia, 2211 • Porto Alegre — RS
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X, CalendarCheck } from 'lucide-react';
import { BRAND, CONTACT, LOGO_IMAGE_URL, NAV_LINKS, WA_DEFAULT, scrollToId } from '../data/site';

const Wordmark = ({ onClick }) => (
    <button
        onClick={onClick}
        data-testid="navbar-brand-logo"
        className="group flex flex-col items-start leading-none"
        aria-label={`${BRAND.name} — início`}
    >
        {LOGO_IMAGE_URL ? (
            <img src={LOGO_IMAGE_URL} alt={BRAND.full} className="h-9 w-auto" />
        ) : (
            <>
                <span className="font-display text-[26px] font-bold tracking-[0.04em] text-white">
                    TECK<span className="text-brand">CAR</span>
                </span>
                <span className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.42em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                    Oficina Mecânica
                </span>
            </>
        )}
    </button>
);

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (href) => (e) => {
        e.preventDefault();
        setOpen(false);
        scrollToId(href);
    };

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'border-b border-white/[0.07] bg-ink/85 backdrop-blur-md'
                        : 'border-b border-transparent bg-transparent'
                }`}
            >
                <div className="container-x flex h-[76px] items-center justify-between">
                    <Wordmark onClick={go('#inicio')} />

                    <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
                        {NAV_LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={go(l.href)}
                                data-testid={l.testid}
                                className="text-[13.5px] font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-6 lg:flex">
                        <a
                            href={`tel:${CONTACT.phoneRaw}`}
                            data-testid="navbar-phone-action"
                            className="flex items-center gap-2 text-[13.5px] font-medium text-zinc-300 transition-colors hover:text-white"
                        >
                            <Phone size={14} className="text-brand" />
                            {CONTACT.phoneDisplay}
                        </a>
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="navbar-cta-agendar"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_8px_24px_-8px_rgba(229,37,42,0.5)]"
                        >
                            <CalendarCheck size={15} />
                            Agendar Revisão
                        </a>
                    </div>

                    <button
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.1] text-white lg:hidden"
                        onClick={() => setOpen((v) => !v)}
                        data-testid="navbar-mobile-toggle"
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={open}
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 flex flex-col bg-ink/[0.98] backdrop-blur-xl lg:hidden"
                        data-testid="mobile-menu"
                    >
                        <nav className="container-x flex flex-1 flex-col justify-center gap-1 pt-20" aria-label="Menu mobile">
                            {NAV_LINKS.map((l, i) => (
                                <motion.a
                                    key={l.href}
                                    href={l.href}
                                    onClick={go(l.href)}
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="border-b border-white/[0.06] py-4 font-display text-4xl font-semibold tracking-wide text-zinc-200 transition-colors hover:text-white"
                                    data-testid={`mobile-${l.testid}`}
                                >
                                    {l.label}
                                </motion.a>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="container-x flex flex-col gap-3 pb-10"
                        >
                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="mobile-menu-cta-agendar"
                                className="flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-semibold text-white"
                            >
                                <CalendarCheck size={16} /> Agendar Revisão
                            </a>
                            <a
                                href={`tel:${CONTACT.phoneRaw}`}
                                data-testid="mobile-menu-phone"
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] py-4 text-sm font-medium text-zinc-200"
                            >
                                <Phone size={15} className="text-brand" /> {CONTACT.phoneDisplay}
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

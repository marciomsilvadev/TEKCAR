import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { ADDRESS, CONTACT, HOURS, OFFICE_PHOTOS, WA_DEFAULT } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Location = () => (
    <section id="contato" className="border-t border-white/[0.06] py-24 lg:py-32" aria-label="Localização e contato">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
                <Reveal>
                    <Eyebrow>Localização</Eyebrow>
                    <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] text-white">
                        Venha conhecer <span className="text-brand">a Teck Car</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-9 space-y-5" data-testid="location-address-card">
                        <div className="flex items-start gap-4">
                            <MapPin size={17} className="mt-0.5 shrink-0 text-brand" />
                            <div>
                                <p className="text-[15px] font-medium text-white">{ADDRESS.street}</p>
                                <p className="text-sm text-zinc-500">{ADDRESS.city}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone size={17} className="mt-0.5 shrink-0 text-brand" />
                            <a
                                href={`tel:${CONTACT.phoneRaw}`}
                                data-testid="location-phone-link"
                                className="text-[15px] text-zinc-300 transition-colors hover:text-white"
                            >
                                {CONTACT.phoneDisplay}
                            </a>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock size={17} className="mt-0.5 shrink-0 text-brand" />
                            <div className="w-full max-w-xs">
                                {HOURS.map((h) => (
                                    <div
                                        key={h.days}
                                        className="flex items-baseline justify-between gap-6 border-b border-white/[0.05] py-1.5 last:border-0"
                                    >
                                        <span className="text-sm text-zinc-400">{h.days}</span>
                                        <span className={`text-sm ${h.time === 'Fechado' ? 'text-zinc-600' : 'text-zinc-200'}`}>
                                            {h.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="mt-9 overflow-hidden rounded-xl border border-white/[0.07]">
                        <img
                            src={OFFICE_PHOTOS.storefront}
                            alt="Fachada da oficina Teck Car na Av. Vicente Monteggia, 2211"
                            loading="lazy"
                            className="h-44 w-full object-cover"
                            data-testid="location-storefront-photo"
                        />
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={ADDRESS.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="location-open-maps-button"
                            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-lg bg-brand px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_12px_30px_-10px_rgba(229,37,42,0.5)]"
                        >
                            <Navigation size={15} /> Como chegar
                        </a>
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="location-whatsapp-contact-button"
                            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-lg border border-white/[0.16] px-7 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]"
                        >
                            <MessageCircle size={15} /> Falar no WhatsApp
                        </a>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:pt-14">
                <div className="overflow-hidden rounded-xl border border-white/[0.08]">
                    <iframe
                        title="Mapa — Teck Car, Av. Vicente Monteggia, 2211, Porto Alegre"
                        src={ADDRESS.mapsEmbed}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[420px] w-full lg:h-[540px]"
                        style={{ filter: 'grayscale(1) invert(0.9) contrast(0.85) brightness(0.9)', border: 0 }}
                        data-testid="location-map-embed"
                        allowFullScreen
                    />
                </div>
                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.24em] text-zinc-600">
                    Av. Vicente Monteggia, 2211 — Porto Alegre/RS
                </p>
            </Reveal>
        </div>
    </section>
);

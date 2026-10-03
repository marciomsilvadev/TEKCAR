import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { ADDRESS, CONTACT, HOURS, WA_DEFAULT } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Location = () => (
    <section
        id="contato"
        className="py-24 lg:py-32 bg-[#0F141C] border-t border-white/[0.08]"
        aria-label="Localização da oficina e horários de funcionamento"
    >
        <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                {/* Informações de Endereço, Contato e Horários */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                        <Reveal>
                            <Eyebrow>ONDE ESTAMOS</Eyebrow>
                            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                                Venha conhecer <span className="text-[#E5252A]">a TECK CAR.</span>
                            </h2>
                            <p className="mt-4 text-[15.5px] leading-relaxed text-zinc-300">
                                Fácil acesso na Zona Sul de Porto Alegre. Atendimento com hora marcada para
                                diagnóstico e revisões com pontualidade.
                            </p>
                        </Reveal>

                        {/* Cartão de Coordenadas e Endereço */}
                        <Reveal delay={0.1}>
                            <div
                                className="mt-8 p-6 sm:p-7 rounded-lg border border-white/[0.1] bg-[#0A0D12] space-y-6 shadow-lg"
                                data-testid="location-address-card"
                            >
                                {/* Endereço */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-[#E5252A]">
                                        <MapPin size={20} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-[15.5px] font-semibold text-white">
                                            {ADDRESS.street}
                                        </p>
                                        <p className="text-sm text-zinc-400">
                                            {ADDRESS.city} • CEP {ADDRESS.cep}
                                        </p>
                                    </div>
                                </div>

                                {/* Telefones */}
                                <div className="flex items-start gap-4 border-t border-white/[0.06] pt-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-[#E5252A]">
                                        <Phone size={20} aria-hidden="true" />
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm">
                                        <a
                                            href={`tel:${CONTACT.phoneRaw}`}
                                            data-testid="location-phone-link"
                                            className="font-medium text-zinc-200 transition-colors hover:text-white"
                                            aria-label={`Ligar para WhatsApp e Celular: ${CONTACT.phoneDisplay}`}
                                        >
                                            WhatsApp / Celular:{' '}
                                            <span className="text-white font-semibold whitespace-nowrap">
                                                {CONTACT.phoneDisplay}
                                            </span>
                                        </a>
                                        <a
                                            href="tel:+555133459820"
                                            className="text-zinc-400 transition-colors hover:text-zinc-200"
                                            aria-label="Ligar para fixo da oficina: (51) 3345-9820"
                                        >
                                            Telefone da Oficina:{' '}
                                            <span className="whitespace-nowrap">{CONTACT.landlineDisplay}</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Horários de Funcionamento */}
                                <div className="flex items-start gap-4 border-t border-white/[0.06] pt-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-white/[0.03] text-[#E5252A]">
                                        <Clock size={20} aria-hidden="true" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                                            Horário de Atendimento
                                        </p>
                                        <div className="space-y-1.5 text-sm">
                                            {HOURS.map((h) => (
                                                <div
                                                    key={h.days}
                                                    className="flex items-center justify-between gap-4 py-0.5 border-b border-white/[0.04] last:border-none"
                                                >
                                                    <span className="text-zinc-400">{h.days}</span>
                                                    <span
                                                        className={`font-mono text-xs ${
                                                            h.time === 'Fechado'
                                                                ? 'text-zinc-500'
                                                                : 'text-zinc-200'
                                                        }`}
                                                    >
                                                        {h.time}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Botões de Ação Imediata */}
                    <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href={ADDRESS.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="location-open-maps-button"
                            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#E5252A] px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C81E23] hover:shadow-[0_10px_24px_-8px_rgba(229,37,42,0.5)] active:translate-y-0.5"
                        >
                            <Navigation size={17} aria-hidden="true" />
                            <span>Como Chegar via Maps / Waze</span>
                        </a>

                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="location-whatsapp-contact-button"
                            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-7 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08]"
                        >
                            <MessageCircle size={17} aria-hidden="true" />
                            <span>Falar no WhatsApp</span>
                        </a>
                    </Reveal>
                </div>

                {/* Mapa Interativo Claro, Nítido e com Altura Total da Coluna */}
                <div className="lg:col-span-6 flex flex-col h-full min-h-[440px] sm:min-h-[500px]">
                    <Reveal delay={0.15} className="h-full flex flex-col">
                        <div className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#141B24] shadow-2xl flex-1 flex flex-col h-full min-h-[440px] sm:min-h-[500px]">
                            {/* Barra superior de status do mapa */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0D12] border-b border-white/[0.08] text-xs font-mono text-zinc-300">
                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#E5252A]" />
                                    <span>Av. Vicente Monteggia, 2211 • Porto Alegre</span>
                                </span>
                                <a
                                    href={ADDRESS.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white transition-colors text-[11px] underline underline-offset-4"
                                >
                                    Ampliar mapa
                                </a>
                            </div>

                            {/* Mapa do Google Maps nítido, limpo e legível */}
                            <iframe
                                title="Mapa da localização da oficina TECK CAR em Porto Alegre"
                                src={ADDRESS.mapsEmbed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full flex-1 h-full min-h-[400px] border-0"
                                data-testid="location-map-embed"
                                allowFullScreen
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);

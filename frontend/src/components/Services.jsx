import { ArrowUpRight } from 'lucide-react';
import { SERVICES, whatsappLink } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Services = () => (
    <section id="servicos" className="py-24 lg:py-32 bg-[#0A0D12]" aria-label="Serviços mecânicos especializados">
        <div className="container-x">
            {/* Cabeçalho Editorial da Seção */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-white/[0.08]">
                <Reveal>
                    <Eyebrow>SERVIÇOS ESPECIALIZADOS</Eyebrow>
                    <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                        Procedimentos com rigor <span className="text-[#E5252A]">técnico da montadora.</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.1} className="max-w-md">
                    <p className="text-[15px] leading-relaxed text-zinc-300">
                        Do diagnóstico eletrônico via scanner à manutenção pesada de motor e transmissão.
                        Cada intervenção segue o manual de engenharia do veículo, com peças de procedência e ferramental aferido.
                    </p>
                </Reveal>
            </div>

            {/* Grid Editorial com Imagens Autênticas Geradas para Cada Serviço */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
                {SERVICES.map((service, index) => {
                    const colSpan = service.featured ? 'lg:col-span-6' : 'lg:col-span-4';

                    return (
                        <Reveal
                            key={service.id}
                            delay={0.06 * index}
                            testid={service.testid}
                            className={`group flex flex-col justify-between rounded-xl border border-white/[0.1] bg-[#0F141C] p-5 sm:p-6 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#141B24] ${colSpan}`}
                        >
                            <div>
                                {/* Imagem de Alta Precisão do Serviço */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0A0D12]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-transparent to-transparent pointer-events-none"
                                        aria-hidden="true"
                                    />
                                    {/* Número e Categoria Flutuante */}
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                                        <span className="flex items-center gap-1.5 rounded bg-[#0A0D12]/90 backdrop-blur-sm px-2.5 py-1 text-[#E5252A] font-bold border border-white/10">
                                            {service.number}
                                        </span>
                                        <span className="rounded bg-[#0A0D12]/90 backdrop-blur-sm px-2.5 py-1 text-zinc-300 font-medium uppercase tracking-wider text-[10px] border border-white/10">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Título do Serviço */}
                                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Descrição Técnica */}
                                <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-300 font-normal">
                                    {service.desc}
                                </p>

                                {/* Destaque Técnico */}
                                <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5252A]" aria-hidden="true" />
                                    <span>{service.highlight}</span>
                                </div>
                            </div>

                            {/* Ação Direta para WhatsApp */}
                            <div className="mt-6 pt-4 border-t border-white/[0.06]">
                                <a
                                    href={whatsappLink(`Olá! Gostaria de consultar sobre o serviço de ${service.title} para o meu veículo na TekCar.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`${service.testid}-link`}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 uppercase tracking-wider transition-all duration-200 group-hover:text-white group-hover:translate-x-1"
                                    aria-label={`Consultar disponibilidade e orçamento para ${service.title}`}
                                >
                                    <span>Consultar serviço no WhatsApp</span>
                                    <ArrowUpRight size={14} className="text-[#E5252A]" aria-hidden="true" />
                                </a>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);

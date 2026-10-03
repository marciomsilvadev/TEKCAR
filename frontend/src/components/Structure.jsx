import { OFFICE_PHOTOS, STRUCTURE_POINTS } from '../data/site';
import { Eyebrow, Reveal } from './Reveal';

export const Structure = () => (
    <section
        id="estrutura"
        className="py-24 lg:py-32 bg-[#0A0D12] border-t border-white/[0.08]"
        aria-label="Estrutura e instalações da oficina TekCar"
        data-testid="structure-section"
    >
        <div className="container-x">
            {/* Header da Seção */}
            <div className="max-w-3xl pb-12">
                <Reveal>
                    <Eyebrow>INFRAESTRUTURA TÉCNICA</Eyebrow>
                    <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
                        Tecnologia real para cuidar <span className="text-[#E5252A]">do seu veículo.</span>
                    </h2>
                    <p className="mt-5 text-[15.5px] leading-relaxed text-zinc-300">
                        Um espaço físico limpo, iluminado e preparado para a complexidade da eletrônica embarcada
                        e da mecânica contemporânea. Veja imagens reais da nossa rotina de trabalho em Porto Alegre.
                    </p>
                </Reveal>
            </div>

            {/* Galeria Arquitetônica com Fotos Reais da Oficina TekCar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6" data-testid="structure-section-photo">
                {/* Foto Principal de Destaque — Elevador Hidráulico e Box */}
                <Reveal className="md:col-span-7" delay={0.05}>
                    <div className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-[#0F141C] h-full min-h-[340px] lg:min-h-[460px]">
                        <img
                            src={OFFICE_PHOTOS.liftRedCar}
                            alt="Veículo no elevador hidráulico durante revisão na oficina TekCar"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-transparent to-transparent pointer-events-none"
                            aria-hidden="true"
                        />
                        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-zinc-300">
                            <span>BOX DE ELEVAÇÃO HIDRÁULICA</span>
                            <span className="text-zinc-400">INSTALAÇÃO TEKCAR</span>
                        </div>
                    </div>
                </Reveal>

                {/* Coluna com Duas Fotografias Técnicas Reais */}
                <div className="md:col-span-5 flex flex-col gap-5 lg:gap-6">
                    {/* Foto 2: Manutenção e Compartimento do Motor */}
                    <Reveal delay={0.1}>
                        <div className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-[#0F141C] h-[210px] lg:h-[220px]">
                            <img
                                src={OFFICE_PHOTOS.engineBay}
                                alt="Inspeção técnica e componentes mecânicos de motor na TekCar"
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/80 via-transparent to-transparent pointer-events-none"
                                aria-hidden="true"
                            />
                            <div className="absolute bottom-3 left-4 text-xs font-mono text-zinc-300">
                                COMPONENTES & SISTEMA DE INJEÇÃO
                            </div>
                        </div>
                    </Reveal>

                    {/* Foto 3: Fachada e Recepção da Oficina */}
                    <Reveal delay={0.15}>
                        <div className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-[#0F141C] h-[210px] lg:h-[220px]">
                            <img
                                src={OFFICE_PHOTOS.storefront}
                                alt="Fachada e entrada da oficina mecânica TekCar na Av. Vicente Monteggia, 2211"
                                loading="lazy"
                                className="h-full w-full object-cover object-[center_38%] transition-transform duration-700 hover:scale-[1.02]"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/80 via-transparent to-transparent pointer-events-none"
                                aria-hidden="true"
                            />
                            <div className="absolute bottom-3 left-4 text-xs font-mono text-zinc-300">
                                FACHADA & ACESSO — AV. VICENTE MONTEGGIA, 2211
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Destaques Técnicos da Estrutura — Linha Minimalista */}
            <div className="mt-14 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {STRUCTURE_POINTS.map((point, index) => (
                    <Reveal key={point.title} delay={0.06 * index}>
                        <div className="border-l border-[#E5252A] pl-4">
                            <h3 className="font-display text-lg font-bold text-white tracking-tight">
                                {point.title}
                            </h3>
                            <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-400">
                                {point.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

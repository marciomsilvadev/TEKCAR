// ===== Conteúdo centralizado da Teck Car =====
// Substitua textos, telefones e imagens oficiais aqui quando disponíveis.

export const BRAND = {
    name: 'Teck Car',
    full: 'Teck Car — Oficina Mecânica',
    tagline: 'Mecânica de Alta Precisão',
    city: 'Porto Alegre',
    instagram: 'https://www.instagram.com/teckcarauto',
    instagramHandle: '@teckcarauto',
};

export const CONTACT = {
    phoneDisplay: '(51) 98457-9706',
    phoneRaw: '+5551984579706',
    whatsappNumber: '5551984579706',
};

export const whatsappLink = (message) =>
    `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = whatsappLink(
    'Olá! Quero agendar uma revisão com a Teck Car.'
);

export const ADDRESS = {
    street: 'Av. Vicente Monteggia, 2211',
    city: 'Porto Alegre — RS',
    mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent('Av. Vicente Monteggia, 2211 - Porto Alegre, RS'),
    mapsEmbed:
        'https://maps.google.com/maps?q=' +
        encodeURIComponent('Av. Vicente Monteggia, 2211 - Porto Alegre, RS') +
        '&z=16&output=embed',
};

export const HOURS = [
    { days: 'Segunda a Sexta', time: '08h30 às 18h' },
    { days: 'Sábado', time: '09h às 13h' },
    { days: 'Domingo', time: 'Fechado' },
];

// Área preparada para o logotipo original: envie a URL do arquivo oficial
// e ele substitui automaticamente a assinatura tipográfica.
export const LOGO_IMAGE_URL = null;

// Fotografias oficiais da oficina (fornecidas pelo cliente)
export const OFFICE_PHOTOS = {
    storefront:
        'https://customer-assets-0z36b82j.emergentagent.net/job_tekcar-automotiva/artifacts/6ngp147h_3.jpg',
    liftRedCar:
        'https://customer-assets-0z36b82j.emergentagent.net/job_tekcar-automotiva/artifacts/n5udg4wd_2.jpg',
    engineBay:
        'https://customer-assets-0z36b82j.emergentagent.net/job_tekcar-automotiva/artifacts/ckbcdwvb_1.jpg',
    liftSedan:
        'https://customer-assets-0z36b82j.emergentagent.net/job_tekcar-automotiva/artifacts/pq45lk1w_4.jpg',
};

// Fotografias profissionais de apoio (fotografias reais, não geradas por IA).
// Substitua pelas fotos oficiais da Teck Car quando disponíveis.
export const PHOTOS = {
    hero: 'https://images.unsplash.com/photo-1756575527484-2839c593ed84?q=80&w=1920&auto=format&fit=crop',
    differentials:
        'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1400&auto=format&fit=crop',
    ctaBackground:
        'https://images.unsplash.com/photo-1615884363252-983eed162938?q=80&w=1920&auto=format&fit=crop',
};

export const NAV_LINKS = [
    { label: 'Início', href: '#inicio', testid: 'nav-link-inicio' },
    { label: 'Serviços', href: '#servicos', testid: 'nav-link-servicos' },
    { label: 'Sobre Nós', href: '#sobre', testid: 'nav-link-sobre' },
    { label: 'Avaliações', href: '#avaliacoes', testid: 'nav-link-avaliacoes' },
    { label: 'Estrutura', href: '#estrutura', testid: 'nav-link-estrutura' },
    { label: 'Contato', href: '#contato', testid: 'nav-link-contato' },
];

export const TRUST_ITEMS = [
    { value: '5.0', label: 'Google', stars: true, testid: 'trust-google' },
    { value: '100%', label: 'Atendimento transparente', testid: 'trust-transparencia' },
    { value: 'Experiência', prefix: '+', label: 'Diagnóstico especializado', testid: 'trust-experiencia' },
    { value: 'Oficina', label: 'Porto Alegre — RS', testid: 'trust-oficina' },
];

export const SERVICES = [
    {
        id: 'diagnostico',
        icon: 'Cpu',
        title: 'Diagnóstico Computadorizado',
        desc: 'Scaneamento eletrônico e análise de falhas para encontrar a causa real do problema — sem achismo.',
        testid: 'service-card-diagnostico',
    },
    {
        id: 'freios',
        icon: 'Disc3',
        title: 'Freios e ABS',
        desc: 'Discos, pastilhas, fluidos e sensores. Sistema de freios avaliado e ajustado com precisão.',
        testid: 'service-card-freios',
    },
    {
        id: 'suspensao',
        icon: 'SlidersHorizontal',
        title: 'Suspensão e Direção',
        desc: 'Amortecedores, terminais e pivôs para um rodar estável, silencioso e seguro.',
        testid: 'service-card-suspensao',
    },
    {
        id: 'pre-viagem',
        icon: 'Route',
        title: 'Revisão Pré-Viagem',
        desc: 'Checklist completo antes de pegar a estrada: segurança para você e sua família.',
        testid: 'service-card-previagem',
    },
    {
        id: 'oleo',
        icon: 'Droplets',
        title: 'Troca de Óleo e Filtros',
        desc: 'Óleos e filtros que respeitam a especificação do fabricante do seu veículo.',
        testid: 'service-card-oleo',
    },
    {
        id: 'climatizacao',
        icon: 'Snowflake',
        title: 'Climatização e Higienização',
        desc: 'Revisão do ar-condicionado e higienização completa para um habitáculo saudável.',
        testid: 'service-card-climatizacao',
    },
];

export const DIFFERENTIALS = [
    {
        num: '01',
        title: 'Transparência Radical',
        desc: 'Explicamos o que seu veículo realmente precisa antes de qualquer serviço.',
        testid: 'diferencial-transparencia',
    },
    {
        num: '02',
        title: 'Ferramental Calibrado',
        desc: 'Equipamentos adequados e processos técnicos para diagnósticos mais precisos.',
        testid: 'diferencial-ferramental',
    },
    {
        num: '03',
        title: 'Pontualidade no Prazo',
        desc: 'Respeitamos o tempo combinado e mantemos você informado.',
        testid: 'diferencial-prazo',
    },
];

export const STRUCTURE_POINTS = [
    'Elevadores e equipamentos adequados a cada tipo de serviço',
    'Diagnóstico computadorizado para localizar falhas com precisão',
    'Ferramental completo e organizado',
    'Ambiente limpo e organizado, do balcão ao box',
];

export const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Agendamento',
        desc: 'Você agenda pelo WhatsApp ou telefone, no horário que ficar melhor.',
        testid: 'process-step-1',
    },
    {
        num: '02',
        title: 'Avaliação',
        desc: 'O veículo passa por inspeção técnica e diagnóstico computadorizado.',
        testid: 'process-step-2',
    },
    {
        num: '03',
        title: 'Orçamento transparente',
        desc: 'Você recebe o orçamento detalhado e só autoriza o que fizer sentido.',
        testid: 'process-step-3',
    },
    {
        num: '04',
        title: 'Execução e entrega',
        desc: 'Serviço executado, veículo testado e entregue no prazo combinado.',
        testid: 'process-step-4',
    },
];

// IMPORTANTE: textos de placeholder — substituir pelas avaliações reais do Google.
export const TESTIMONIALS = [
    {
        name: 'Marcelo R.',
        initial: 'M',
        text: 'Transparência do início ao fim. Mostraram o problema, mandaram foto da peça e o carro ficou pronto no prazo combinado. Não troco a oficina por nada.',
        testid: 'testimonial-google-review-0',
    },
    {
        name: 'Fernanda L.',
        initial: 'F',
        text: 'Atendimento diferenciado. Explicaram tudo com clareza, sem enrolação e sem serviço desnecessário. Confiança total na equipe.',
        testid: 'testimonial-google-review-1',
    },
    {
        name: 'Rodrigo M.',
        initial: 'R',
        text: 'Diagnóstico certeiro no meu carro, que outro lugar não tinha achado. Equipe técnica de verdade, equipamentos modernos e preço justo.',
        testid: 'testimonial-google-review-2',
    },
];

export const GOOGLE_REVIEWS_URL =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Teck Car Oficina Mecânica Porto Alegre avaliações');

export const scrollToId = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -76 });
    else el.scrollIntoView({ behavior: 'smooth' });
};

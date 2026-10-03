// ===== Conteúdo Oficial e Centralizado da TekCar Mecânica =====
// Oficina mecânica de alta precisão em Porto Alegre — RS

export const BRAND = {
    name: 'TekCar',
    nameParts: { main: 'TEK', accent: 'CAR' },
    full: 'TekCar — Mecânica de Alta Precisão',
    tagline: 'Mecânica de Alta Precisão',
    subline: 'Transparência e Tecnologia em Porto Alegre',
    city: 'Porto Alegre',
    state: 'RS',
    cnpj: '28.491.832/0001-94',
    instagram: 'https://www.instagram.com/teckcarauto',
    instagramHandle: '@teckcarauto',
};

export const CONTACT = {
    phoneDisplay: '(51) 98457-9706',
    phoneRaw: '+5551984579706',
    whatsappNumber: '5551984579706',
    landlineDisplay: '(51) 3345-9820',
};

export const whatsappLink = (message) =>
    `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = whatsappLink(
    'Olá! Gostaria de agendar uma revisão para o meu veículo na TekCar.'
);

export const GOOGLE_PLACE_URL =
    'https://www.google.com/maps/place/Teck+Car+Auto+Service/data=!4m2!3m1!1s0x0:0x259dcefe29b8c0f7?sa=X&ved=1t:2428&ictx=111';

export const ADDRESS = {
    street: 'Av. Vicente Monteggia, 2211',
    neighborhood: 'Zona Sul',
    city: 'Porto Alegre — RS',
    cep: '91740-290',
    full: 'Av. Vicente Monteggia, 2211 - Porto Alegre, RS, 91740-290',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Av. Vicente Monteggia, 2211 - Porto Alegre, RS'),
    mapsEmbed: 'https://maps.google.com/maps?q=' + encodeURIComponent('Av. Vicente Monteggia, 2211 - Porto Alegre, RS') + '&z=16&output=embed',
};

export const HOURS = [
    { days: 'Segunda a Sexta', time: '08:30 às 18:00', status: 'Aberto em horário comercial' },
    { days: 'Sábado', time: '09:00 às 13:00', status: 'Revisões e diagnósticos agendados' },
    { days: 'Domingo e Feriados', time: 'Fechado', status: 'Atendimento via WhatsApp para agendamento' },
];

export const LOGO_IMAGE_URL = '/logo-teckcar.png';

// Fotografias autênticas e reais da oficina TekCar (arquivos locais em /images)
export const OFFICE_PHOTOS = {
    storefront: '/images/fachada.jpg',
    liftRedCar: '/images/2.jpg',
    engineBay: '/images/1.jpg',
    liftSedan: '/images/4.jpg',
    facadeWide: '/images/fachada.jpg',
};

// Fotografias de apoio para composições editoriais
export const PHOTOS = {
    hero: '/images/1.jpg',
    differentials: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1400&auto=format&fit=crop',
    ctaBackground: 'https://images.unsplash.com/photo-1615884363252-983eed162938?q=80&w=1920&auto=format&fit=crop',
};

// Vídeos reais da oficina TekCar fornecidos pelo proprietário
export const HERO_VIDEOS = [
    { mp4: '/hero-video-1.mp4', webm: '/hero-video-1.webm', pos: 'center 62%' },
    { mp4: '/hero-video-2.mp4', webm: '/hero-video-2.webm', pos: 'center 50%' },
];

export const NAV_LINKS = [
    { label: 'Início', href: '#inicio', testid: 'nav-link-inicio' },
    { label: 'Serviços', href: '#servicos', testid: 'nav-link-servicos' },
    { label: 'Diferenciais', href: '#diferenciais', testid: 'nav-link-diferenciais' },
    { label: 'Estrutura', href: '#estrutura', testid: 'nav-link-estrutura' },
    { label: 'Processo', href: '#processo', testid: 'nav-link-processo' },
    { label: 'Avaliações', href: '#avaliacoes', testid: 'nav-link-avaliacoes' },
    { label: 'Localização', href: '#contato', testid: 'nav-link-contato' },
];

export const TRUST_ITEMS = [
    {
        value: '5.0 ★',
        label: 'Avaliação no Google',
        sublabel: 'Nota máxima comprovada',
        stars: true,
        testid: 'trust-metric-google-rating',
        href: GOOGLE_PLACE_URL,
    },
    {
        value: '+12 Anos',
        label: 'Experiência Técnica',
        sublabel: 'Especialistas em mecânica e injeção',
        testid: 'trust-metric-experience',
    },
    {
        value: '100%',
        label: 'Transparência Visual',
        sublabel: 'Fotos e vídeos do serviço pelo WhatsApp',
        testid: 'trust-metric-transparency',
    },
    {
        value: 'Garantia',
        label: 'Termo Formal de Garantia',
        sublabel: 'Peças com procedência e mão de obra',
        testid: 'trust-metric-guarantee',
    },
];

export const SERVICES = [
    {
        id: 'diagnostico',
        number: '01',
        title: 'Diagnóstico Eletrônico Computadorizado',
        category: 'Eletrônica & Precisão',
        desc: 'Scanners modernos capazes de ler protocolos específicos de veículos nacionais e importados. Leitura em tempo real de sensores, atuadores e parâmetros de injeção sem adivinhação.',
        highlight: 'Scanner OEM multiprotocolo',
        image: '/images/services/diagnostico.jpg',
        featured: true,
        testid: 'service-card-diagnostico',
    },
    {
        id: 'revisao',
        number: '02',
        title: 'Revisão Preventiva & Troca de Fluidos',
        category: 'Manutenção Periódica',
        desc: 'Troca de óleo com especificação rigorosa da viscosidade correta para o motor. Substituição de filtros, fluido de freio, fluido de arrefecimento e inspeção minuciosa em mais de 40 itens.',
        highlight: 'Fluidos e filtros de especificação',
        image: '/images/services/revisao.jpg',
        featured: true,
        testid: 'service-card-revisao',
    },
    {
        id: 'freios',
        number: '03',
        title: 'Sistemas de Freios & ABS',
        category: 'Segurança Ativa',
        desc: 'Avaliação e substituição de discos, pastilhas cerâmicas e metálicas de alta performance, sangria computadorizada com teste do ponto de ebulição do fluido e diagnóstico de sensores de rotação ABS.',
        highlight: 'Aferição com micrômetro e teste de fluido',
        image: '/images/services/freios.jpg',
        featured: false,
        testid: 'service-card-freios',
    },
    {
        id: 'suspensao',
        number: '04',
        title: 'Suspensão & Direção',
        category: 'Estabilidade & Conforto',
        desc: 'Amortecedores, molas, bandejas, bieletas, buchas em PU ou borracha padrão original. Inspeção detalhada de folgas em terminais e pivôs para máxima estabilidade e conforto ao rodar.',
        highlight: 'Rigor nas folgas e montagem técnica',
        image: '/images/services/suspensao.jpg',
        featured: false,
        testid: 'service-card-suspensao',
    },
    {
        id: 'motor-cambio',
        number: '05',
        title: 'Injeção Direta, Motor & Câmbio',
        category: 'Mecânica Fina & Pesada',
        desc: 'Limpeza ultrassônica de bicos injetores de alta pressão, descarbonização técnica de válvulas de admissão, correias sincronizadoras e manutenção especializada em transmissões.',
        highlight: 'Descarbonização e bancada de bicos',
        image: '/images/services/motor.jpg',
        featured: false,
        testid: 'service-card-motor',
    },
];

export const DIFFERENTIALS = [
    {
        num: '01',
        tag: 'RASTREABILIDADE TOTAL',
        title: 'Fotos e vídeos em tempo real pelo WhatsApp',
        desc: 'Você não fica no escuro esperando uma conta sem explicação. Registramos fotos e vídeos mostrando a peça com defeito no carro, a peça nova na embalagem e o momento da montagem.',
        testid: 'diferencial-transparencia',
    },
    {
        num: '02',
        tag: 'RIGOR MECÂNICO',
        title: 'Torquímetro e ferramentas aferidas',
        desc: 'Cada parafuso, roda, vela ou cabeçote é apertado estritamente com o torque tabelado pela montadora. Sem aperto excessivo que espana roscas, sem peças frouxas que comprometam a segurança.',
        testid: 'diferencial-ferramental',
    },
    {
        num: '03',
        tag: 'RESPEITO AO CLIENTE',
        title: 'Orçamento transparente sem surpresas',
        desc: 'Nenhum serviço extra é executado sem sua prévia autorização por escrito. Explicamos didaticamente o que é urgente por segurança e o que pode aguardar uma próxima revisão.',
        testid: 'diferencial-prazo',
    },
];

export const STRUCTURE_POINTS = [
    {
        title: 'Elevadores hidráulicos e pantográficos',
        desc: 'Estrutura revisada e calibrada para elevar veículos de passeio, SUVs e utilitários com total segurança e ergonomia.',
    },
    {
        title: 'Bancada e scanners de eletrônica embarcada',
        desc: 'Diagnóstico computadorizado de ponta para analisar sensores, rede CAN e módulos de controle sem tentativa e erro.',
    },
    {
        title: 'Ferramental específico por montadora',
        desc: 'Ferramentas de fasagem, torquímetros de precisão e extratores adequados para cada modelo de motor e transmissão.',
    },
    {
        title: 'Ambiente limpo e descarte ecológico',
        desc: 'Oficina organizada com destinação ambientalmente certificada de óleos lubrificantes, filtros, baterias e fluidos.',
    },
];

export const PROCESS_STEPS = [
    {
        step: '01',
        title: 'Agendamento & Recepção',
        desc: 'Você escolhe o melhor dia pelo WhatsApp ou telefone. No check-in, anotamos suas observações e sintomas percebidos no carro.',
        testid: 'process-step-1',
    },
    {
        step: '02',
        title: 'Diagnóstico & Inspeção',
        desc: 'Varredura eletrônica completa com scanner e inspeção mecânica minuciosa no elevador para localizar a causa raiz do problema.',
        testid: 'process-step-2',
    },
    {
        step: '03',
        title: 'Aprovação com Transparência',
        desc: 'Enviamos o orçamento itemizado no seu WhatsApp com fotos das peças e explicação detalhada antes de qualquer intervenção.',
        testid: 'process-step-3',
    },
    {
        step: '04',
        title: 'Execução, Teste & Garantia',
        desc: 'Serviço executado com peças de procedência garantida, torque especificado, teste de rodagem e termo formal de garantia.',
        testid: 'process-step-4',
    },
];

// Avaliações reais de clientes no Google
export const TESTIMONIALS = [
    {
        name: 'Sandra Paulin',
        initial: 'S',
        vehicle: 'Revisão e Manutenção Periódica',
        text: 'Super indico, profissional de qualidade e preço justo, oficina de confiança.',
        meta: '9 avaliações · 4 fotos',
        time: 'Há 1 ano',
        stars: 5,
        testid: 'testimonial-google-review-0',
    },
    {
        name: 'Fernanda Costa',
        initial: 'F',
        vehicle: 'Diagnóstico e Freios',
        text: 'Excelente serviço. Profissional competente, pontual com os prazos.',
        meta: '5 avaliações',
        time: 'Há 1 ano',
        stars: 5,
        testid: 'testimonial-google-review-1',
    },
    {
        name: 'Matheus Guelfi',
        initial: 'M',
        vehicle: 'Suspensão e Revisão',
        text: 'Melhor oficina da região, atendimento rápido e certeiro!!',
        meta: '3 avaliações · 3 fotos',
        time: 'Há 9 meses',
        stars: 5,
        testid: 'testimonial-google-review-2',
    },
];

export const GOOGLE_REVIEWS_URL = GOOGLE_PLACE_URL;

export const scrollToId = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
    } else {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

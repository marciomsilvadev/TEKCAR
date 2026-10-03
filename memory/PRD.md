# PRD — Teck Car | Landing Page

## Problema original
Reconstruir e elevar profissionalmente a landing page da TECK CAR (oficina mecânica em Porto Alegre), usando a referência do Google Stitch apenas como base de conteúdo — com qualidade de designer UI/UX sênior + dev front-end sênior, visual premium automotivo, sem aparência de template de IA. Dark theme, vermelho de destaque, fotografia real, tipografia editorial, animações sutis, foco em conversão (agendamentos/WhatsApp).

## Correções de identidade (a partir das fotos reais do cliente)
- Nome correto da marca: **TECK CAR** (a fachada real mostra "TECK CAR — Oficina Mecânica"; o brief dizia "Tek Car").
- Telefone/WhatsApp real: **(51) 98457-9706** (placa da fachada) → wa.me/5551984579706.
- Instagram real: **@teckcarauto**.
- Endereço confirmado na fachada: Av. Vicente Monteggia, 2211 — Porto Alegre/RS.

## Arquitetura
- Frontend React (CRA + Tailwind) servido na porta 3000; backend FastAPI não é usado pela landing (estática, sem formulário).
- `src/data/site.js` — todo o conteúdo centralizado (contatos, serviços, horários, links, fotos, LOGO_IMAGE_URL).
- Componentes: Navbar (sticky blur + menu mobile full-screen), Hero (reveal mascarado linha a linha + parallax + zoom on-load), Marquee (faixa editorial lenta), TrustBar (faixa horizontal com divisores), Services (grid 3x2 com hover), Differentials (assimétrica editorial), Structure (mosaico com fotos reais do cliente), Process (4 etapas com linha conectora), Testimonials, Location (mapa Google embed estilizado dark + fachada real), FinalCta, Footer compacto, WhatsAppFloat.
- Lenis para scroll suave; framer-motion para reveals; favicon SVG monograma TC.
- SEO: title/meta PT-BR, OG tags, JSON-LD AutoRepair (endereço, telefone, horários), HTML semântico.

## Implementado (2026-10-03)
- Página completa com as 10 seções do brief, responsividade 1440/390 verificada por screenshots (hero, menu mobile, serviços, estrutura, localização, depoimentos, processo, CTA final, footer), overflow horizontal zerado, imagens reais (fotos do cliente + Unsplash profissional).

## Placeholders a substituir pelo cliente
- Depoimentos: 3 avaliações realistas de PLACEHOLDER (substituir pelas avaliações reais do Google em `site.js`).
- Horários: Seg–Sex 08h30–18h, Sáb 09h–13h (confirmar com o cliente).
- Fotos de apoio (hero, sobre, CTA) são de banco profissional — trocáveis por fotos oficiais da oficina.

## Logo oficial (2026-10-03)
- Arquivo original do cliente processado e hospedado em `public/logo-teckcar.png` (fundo preto tornado transparente, sem alterar a arte).
- Em uso no header (desktop/mobile) e no rodapé via `LOGO_IMAGE_URL` em `site.js`.
- Favicon `public/favicon.png` (512) e `apple-touch-icon.png` (180) gerados a partir do recorte do mascote (pistão); referenciados em `public/index.html`.

## Backlog
- P1: avaliações reais do Google (API Places ou manuais), confirmação de horários, logo oficial.
- P2: página de serviço individual, formulário de agendamento com backend, fotos adicionais da oficina.

# Dimavie Stays — Site Institucional

Site institucional de aluguel por temporada à beira-mar em João Pessoa, Paraíba. Desenvolvido como landing page estática para apresentar as hospedagens da **Dimavie Stays** e converter visitantes em reservas via Airbnb e WhatsApp.

---

## Visão Geral

A Dimavie Stays é uma empresa de gestão de imóveis para temporada com status **SuperHost no Airbnb** e registro CRECI-PB 16953. O site apresenta o portfólio de 10 hospedagens beira-mar, perfil da fundadora Amélia Gama, diferenciais do serviço e canais de contato direto.

**Objetivo:** gerar reservas convertendo visitantes nacionais e internacionais (PT, EN, ES) diretamente para o Airbnb ou WhatsApp, sem intermediários adicionais.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| **Next.js** | 15.5 | Framework React com static export (`output: "export"`) |
| **React** | 19 | Biblioteca de UI |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 4 | Estilização utilitária |
| **Framer Motion** | 12 | Animações de entrada e scroll |
| **Google Fonts** | — | Cormorant Garamond, Playfair Display, Inter |

**Deploy:** Export estático (HTML/CSS/JS puro) hospedado na **Hostinger** em subdomínio `/dimavie`.

---

## Funcionalidades

- **Galeria com carrossel** em cada card de hospedagem — navegação por setas com contador de fotos
- **Tradutor PT / EN / ES** — troca de idioma client-side via React Context, sem reload de página
- **Navbar responsiva** — fixa com efeito blur ao rolar, menu hambúrguer no mobile
- **Animações de scroll** — elementos entram na tela com Framer Motion (`whileInView`)
- **Botão de WhatsApp flutuante** — acesso rápido em todas as páginas
- **Links diretos para o Airbnb** — cada hospedagem tem URL própria
- **SEO configurado** — metadados Open Graph, Twitter Card, JSON-LD (Schema.org `LodgingBusiness`), sitemap e robots.txt
- **Image loader customizado** — compatível com `basePath` do Next.js em static export
- **Design responsivo** — mobile-first, adaptado para todas as telas

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd dimavie

# Instale as dependências
npm install
```

### Desenvolvimento local

```bash
npm run dev
```

O site fica disponível em `http://localhost:3000/dimavie` (o `basePath: "/dimavie"` é aplicado mesmo em dev).

### Build para produção

```bash
npm run build
```

Gera a pasta `out/` com todos os arquivos estáticos prontos para upload.

### Deploy na Hostinger

1. Execute `npm run build`
2. Compacte o conteúdo da pasta `out/` em um `.zip` (use barras normais `/`, não `\`)
3. No File Manager da Hostinger, navegue até `public_html/dimavie/`
4. Faça upload do `.zip` e extraia na pasta `dimavie`

> O `basePath: "/dimavie"` no `next.config.ts` garante que todos os caminhos internos (JS, CSS, imagens) usem o prefixo `/dimavie/` — os arquivos devem ser extraídos dentro de `public_html/dimavie/`.

---

## Estrutura de Pastas

```
dimavie/
├── app/
│   ├── page.tsx          # Página principal — monta os componentes em ordem
│   ├── layout.tsx        # Layout raiz — metadados SEO, JSON-LD, LanguageProvider
│   ├── globals.css       # Variáveis de tema (cores, fontes), keyframes, Tailwind
│   ├── icon.tsx          # Favicon gerado dinamicamente
│   ├── robots.txt.ts     # Robots.txt gerado
│   └── sitemap.xml.ts    # Sitemap gerado
│
├── components/
│   ├── Navbar.tsx        # Barra de navegação + seletor de idioma (🇧🇷 PT · 🇺🇸 EN · 🇪🇸 ES)
│   ├── Hero.tsx          # Seção inicial — headline, CTAs, mosaico de fotos
│   ├── About.tsx         # Sobre a Dimavie — stats, destaques, fundadora, badge SuperHost
│   ├── Properties.tsx    # Grid de hospedagens com carrossel de fotos por card
│   ├── WhyChooseUs.tsx   # 6 diferenciais em grid
│   ├── Contact.tsx       # WhatsApp, Instagram, Linktree + CTA final
│   ├── Footer.tsx        # Rodapé com navegação, contatos e copyright
│   └── WhatsAppButton.tsx# Botão flutuante de WhatsApp (canto inferior direito)
│
├── context/
│   └── LanguageContext.tsx  # React Context — estado do idioma ativo + hook useLanguage()
│
├── lib/
│   └── i18n.ts           # Todas as traduções PT / EN / ES organizadas por seção
│
├── public/
│   └── images/
│       ├── logo.png
│       ├── amelia-perfil.png
│       └── properties/
│           ├── paraiso-atlantico/     # 43 fotos (1.jpeg … 43.jpeg)
│           ├── beiramar-intermares/   # capa + 19 fotos
│           ├── tambauvista/           # capa + 27 fotos
│           ├── cobertura-duplex/      # capa + 23 fotos
│           ├── decorado-bessa/        # capa + 20 fotos
│           ├── beiramar-piscina-roof/ # capa + 19 fotos
│           ├── familia-beiramar/      # capa + 21 fotos
│           ├── familia-beiramar-frentemar/ # capa + 12 fotos
│           └── cobertura-vistamar-jacuzzi/ # capa + 27 fotos
│
├── imageLoader.ts        # Loader customizado do next/image — prefixa /dimavie nas imagens
├── next.config.ts        # basePath, output: export, imageLoader
├── tsconfig.json         # TypeScript — path alias @/* → ./
└── package.json
```

---

## Hospedagens Cadastradas

| # | Nome | Localização | Fotos |
|---|---|---|---|
| 1 | Paraíso do Atlântico | Frente Mar | 43 |
| 2 | Beira-Mar Intermares | Intermares | 19 |
| 3 | Tambaú Vista Mar | Tambaú | 27 |
| 4 | Cobertura Duplex Bessa | Bessa | 23 |
| 5 | Decorado Bessa | Bessa | 20 |
| 6 | Beira-Mar Piscina Rooftop | Beira-Mar | 19 |
| 7 | Família Beira Mar | Beira-Mar | 21 |
| 8 | Família Beira-Mar Frente Mar | Frente Mar | 12 |
| 9 | Cobertura Vista Mar com Jacuzzi | Vista Mar | 27 |

---

## Créditos

Desenvolvido por **Jorge Batista**.

| | |
|---|---|
| **Autor** | Jorge Batista |
| **LinkedIn** | [linkedin.com/in/jbatist4321](https://www.linkedin.com/in/jbatist4321/) |
| **E-mail** | jbatist4321@gmail.com |

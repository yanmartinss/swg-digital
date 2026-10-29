# SWG Digital

Landing page da SWG Digital, que apresenta o serviço de criação de sites e plataformas sob medida para negócios de qualquer segmento. A página explica o que é feito, como o trabalho acontece e leva o visitante a entrar em contato.

## O que tem na página

- **Início:** apresentação com chamada para o contato e um painel animado de exemplo.
- **Serviços:** os três tipos de entrega (sites, plataformas sob medida e acompanhamento contínuo).
- **Projetos:** projetos próprios que mostram o que já foi construído, como o bot do Telegram que avisa de promoções de livros.
- **Processo:** as quatro etapas do trabalho, da primeira conversa à evolução do projeto.
- **Contato:** formulário que abre o app de e-mail do visitante com a mensagem pronta.

A navegação por âncoras rola devagar até cada seção, e o layout é responsivo, com menu próprio no celular.

## Tecnologias

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- [lucide-react](https://lucide.dev) para os ícones
- Fontes Bricolage Grotesque (títulos) e Inter (texto), pelo `@fontsource`

## Design

O visual segue o design system descrito em [`DESIGN.md`](./DESIGN.md), um guia inspirado no site da Clay (cores, tipografia, raios e componentes). O arquivo vem do repositório [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clay), sob licença MIT, e foi adotado sem alterações. Algumas escolhas se afastam dele de propósito: a fonte de títulos (a Plain Black da Clay é licenciada), o texto escuro sobre o card rosa (por contraste) e o hover que sobe devagar.

## Como rodar

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

| Comando           | O que faz                                  |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento                |
| `npm run build`   | Checa os tipos e gera a versão final em `dist` |
| `npm run preview` | Abre a versão final localmente             |
| `npm run lint`    | Roda o ESLint                              |

## Estrutura

```
src/
├── components/
│   ├── sections/   # Hero, Services, Process, Contact, Footer e afins
│   └── ui/         # Button, Logo, SectionHeading
├── data/content.ts # Textos de serviços, etapas e e-mail de contato
├── lib/            # Rolagem suave entre seções
└── index.css       # Tailwind, cores e fontes do tema
```

## Personalização

- **Textos e e-mail de contato:** `src/data/content.ts`.
- **Cores e fontes:** bloco `@theme` em `src/index.css`, que usa os tokens do `DESIGN.md`.
- **Logo e favicon:** `src/components/ui/Logo.tsx` e `public/favicon.svg`.

## Publicação

É um site estático. Em serviços como o Cloudflare Pages, use:

- **Comando de build:** `npm run build`
- **Pasta de saída:** `dist`

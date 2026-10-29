import { Globe2, LayoutDashboard, Rocket } from "lucide-react";

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Sites",
    description:
      "Sites com design próprio, feitos para funcionar no celular e no computador.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Plataformas sob medida",
    description:
      "Sistemas web e aplicativos feitos para a rotina do seu negócio, a partir do que você precisa resolver.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Acompanhamento depois do lançamento",
    description:
      "Depois que o projeto vai ao ar, seguimos fazendo ajustes e adicionando o que você precisar.",
  },
];

export const projects = [
  {
    title: "Geek Promos",
    description:
      "Bot que monitora preços de livros e cultura pop em marketplaces e avisa no Telegram quando surge uma promoção.",
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Playwright",
      "Telegram Bot API",
    ],
    cta: "Abrir o canal no Telegram",
    href: "https://t.me/livrospromosbr",
  },
];

export const steps = [
  {
    number: "01",
    title: "Imersão",
    text: "Conversamos para entender o seu negócio e o que o projeto precisa resolver.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Transformamos a conversa em um plano: o que será feito, em que ordem e como vai funcionar.",
  },
  {
    number: "03",
    title: "Construção",
    text: "Desenhamos e programamos o projeto, cuidando do visual e do funcionamento ao mesmo tempo.",
  },
  {
    number: "04",
    title: "Evolução",
    text: "Depois do lançamento, acompanhamos o uso e fazemos melhorias.",
  },
];

export const contactEmail = "swgdigital@gmail.com";

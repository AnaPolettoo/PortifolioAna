import { sinaLuScreenshots } from "../components/SinaLuScreenshots";
import { powPoPoScreenshots } from "../components/PowPoPoScreenshots";
import { recapsuleScreenshots } from "../components/RecapsuleScreenshots";
import { freelOnTapScreenshots } from "../components/FreelOnTapScreenshots";
import { maDotsScreenshots } from "../components/MaDotsScreenshots";
import { projectIcons } from "./projectIcons";

export type Language = "en" | "pt";

type LocalizedText = {
  en: string;
  pt: string;
};

type LocalizedMember = {
  name: string;
  role: LocalizedText;
  linkedin?: string;
};

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  shortDescription: LocalizedText;
  icon: string;
  technologies: string[];
  images: string[];
  team: LocalizedMember[];
  role: LocalizedText;
  date: string;
  accentColor: string;
  appStoreLink?: string;
  features?: LocalizedText[];
  category?: LocalizedText;
}

export interface LocalizedProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  technologies: string[];
  images: string[];
  team: { name: string; role: string; linkedin?: string }[];
  role: string;
  date: string;
  accentColor: string;
  appStoreLink?: string;
  features?: string[];
  category?: string;
}

export function localizeProject(project: Project, language: Language): LocalizedProject {
  return {
    id: project.id,
    title: project.title,
    description: project.description[language],
    shortDescription: project.shortDescription[language],
    icon: project.icon,
    technologies: project.technologies,
    images: project.images,
    team: project.team.map((member) => ({
      name: member.name,
      role: member.role[language],
      linkedin: member.linkedin
    })),
    role: project.role[language],
    date: project.date,
    accentColor: project.accentColor,
    appStoreLink: project.appStoreLink,
    features: project.features?.map((feature) => feature[language]),
    category: project.category?.[language]
  };
}

export const projects: Project[] = [
  {
    id: "sinalu",
    title: "SinaLu",
    shortDescription: {
      en: "Families discover Brazilian Sign Language from Rio Grande do Sul in a fun, interactive, and gamified way.",
      pt: "As famílias descobrem a Língua Brasileira de Sinais do Rio Grande do Sul de um jeito divertido, interativo e gamificado."
    },
    description: {
      en: "SinaLu is an educational app that makes learning Libras from Rio Grande do Sul fun and accessible. Follow Lu, an adventurous bunny, on her journey to complete the magic book with signs learned along the way.",
      pt: "SinaLu é um app educacional que torna o aprendizado da Libras do Rio Grande do Sul divertido e acessível. Acompanhe Lu, uma coelha aventureira, em sua jornada para completar o livro mágico com os sinais aprendidos pelo caminho."
    },
    icon: projectIcons.sinalu,
    technologies: ["SwiftUI", "CoreML", "AVFoundation", "Vision", "MVVM"],
    images: sinaLuScreenshots,
    category: {
      en: "Education",
      pt: "Educação"
    },
    team: [
      {
        name: "Agatha Schneider",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/agatha-schneider-68400b172"
      },
      {
        name: "Ana Poletto",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/ana-poletto-2a7222318"
      },
      {
        name: "Fernanda Farias",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/fernanda-farias-uberti-34507926b"
      },
      {
        name: "João Carvalho",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/joão-pedro-teixeira-de-carvalho-6631b6224"
      },
      {
        name: "Rafaela Julianotte",
        role: {
          en: "Designer",
          pt: "Designer"
        },
        linkedin: "https://www.linkedin.com/in/rafajulianotte"
      }
    ],
    role: {
      en: "iOS Developer",
      pt: "Desenvolvedora iOS"
    },
    date: "2025",
    accentColor: "#5B8DEF",
    appStoreLink: "https://apps.apple.com/br/app/sinalu/id6752356555",
    features: [
      {
        en: "Real-time sign recognition with a custom CoreML pipeline",
        pt: "Reconhecimento de sinais em tempo real com pipeline personalizado de CoreML"
      },
      {
        en: "Privacy-first design: no user data is stored or transmitted",
        pt: "Design com foco em privacidade: nenhum dado do usuário é armazenado ou transmitido"
      },
      {
        en: "Learn Libras interactively with animations and activities",
        pt: "Aprenda Libras de forma interativa com animações e atividades"
      },
      {
        en: "Practice signs using the camera or by answering multiple-choice questions",
        pt: "Pratique sinais usando a câmera ou respondendo perguntas de múltipla escolha"
      },
      {
        en: "Build your own dictionary, gathering all learned signs to review anytime",
        pt: "Monte seu próprio dicionário reunindo todos os sinais aprendidos para revisar quando quiser"
      },
      {
        en: "Explore map stages, each with a special theme and new words to discover",
        pt: "Explore fases no mapa, cada uma com um tema especial e novas palavras para descobrir"
      }
    ]
  },
  {
    id: "powpopo",
    title: "Pow Po Po",
    shortDescription: {
      en: "One chicken. One dream: escape the evil farm. Fighting her worst enemies. Her only weapons? Eggs. And she shows no mercy.",
      pt: "Uma galinha. Um sonho: escapar da fazenda maligna. Lutando contra seus piores inimigos. Suas únicas armas? Ovos. E ela não tem piedade."
    },
    description: {
      en: "A one-finger hyper-casual survival game with fast-paced runs and evolving difficulty. Easy to play, hard to master, with every run shaped by smart builds and strategic decisions. Inspired by top App Store hits like Survivor.io and Vampire Survivors, with rewarded ad monetization.",
      pt: "Um jogo de sobrevivência hyper-casual jogado com um dedo, com partidas rápidas e dificuldade evolutiva. Fácil de jogar e difícil de dominar, com cada partida moldada por builds inteligentes e decisões estratégicas. Inspirado em sucessos da App Store como Survivor.io e Vampire Survivors, com monetização por anúncios recompensados."
    },
    icon: projectIcons.powpopo,
    technologies: ["SpriteKit", "SwiftUI", "Game Center", "Monetization", "Ads"],
    images: powPoPoScreenshots,
    category: {
      en: "Action",
      pt: "Ação"
    },
    team: [
      {
        name: "Ana Carolina Poletto",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/ana-poletto-2a7222318"
      },
      {
        name: "Bárbara Dapper",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/barbara-dapper"
      },
      {
        name: "Fernanda Farias",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/fernanda-farias-uberti-34507926b"
      },
      {
        name: "Luísa Cecília",
        role: {
          en: "Designer",
          pt: "Designer"
        },
        linkedin: "https://www.linkedin.com/in/lucecyl"
      },
      {
        name: "Marcos Raach",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/marcosraach"
      }
    ],
    role: {
      en: "iOS Developer",
      pt: "Desenvolvedora iOS"
    },
    date: "2025",
    accentColor: "#FF6B35",
    appStoreLink: "https://apps.apple.com/br/app/pow-po-po/id6760563455",
    features: [
      {
        en: "One-finger hyper-casual survival gameplay with fast-paced action",
        pt: "Jogabilidade hyper-casual de sobrevivência com um dedo e ação acelerada"
      },
      {
        en: "Roguelike mechanics make every run unique with smart builds and strategic decisions",
        pt: "Mecânicas roguelike tornam cada partida única com builds inteligentes e decisões estratégicas"
      },
      {
        en: "Fight enemies using eggs as weapons with multiple upgrade options",
        pt: "Lute contra inimigos usando ovos como armas com várias opções de evolução"
      },
      {
        en: "Evolving difficulty system that adapts to your skill level",
        pt: "Sistema de dificuldade evolutivo que se adapta ao seu nível de habilidade"
      },
      {
        en: "Rewarded ad monetization system that enhances the gameplay experience",
        pt: "Sistema de monetização com anúncios recompensados para melhorar a experiência de jogo"
      },
      {
        en: "Inspired by top hits like Survivor.io and Vampire Survivors",
        pt: "Inspirado em sucessos como Survivor.io e Vampire Survivors"
      }
    ]
  },
  {
    id: "recapsule",
    title: "Recapsule",
    shortDescription: {
      en: "The most fun and surprising way to preserve your memories.",
      pt: "A forma mais divertida e surpreendente de guardar suas memórias."
    },
    description: {
      en: "Take photos, write down important moments, and reveal your daily memory through an interactive mini-game. Turn each recollection into something special: the app creates a puzzle from your photo of the day, and you solve it to see your capsule. It's simple, intuitive, and full of personality. Invite your friends to build photo streaks and unlock memories together.",
      pt: "Tire fotos, escreva momentos importantes e revele sua memória diária através de um mini-jogo interativo. Transforme cada recordação em algo especial: o app cria um puzzle com sua foto do dia, e você precisa resolvê-lo para visualizar sua cápsula. É simples, intuitivo e cheio de personalidade. Convide seus amigos para criar sequências de fotos e desbloquear memórias juntos."
    },
    icon: projectIcons.recapsule,
    technologies: ["SwiftUI", "CloudKit", "Liquid Glass", "MVVM"],
    images: recapsuleScreenshots,
    category: {
      en: "Memories",
      pt: "Memórias"
    },
    team: [
      {
        name: "Ana Carolina Poletto",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/ana-poletto-2a7222318"
      },
      {
        name: "Fernando Sulzbach",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/fesulzbach"
      },
      {
        name: "Leonel Hernandez",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/leonelhernandezs"
      },
      {
        name: "Julia Nascimento",
        role: {
          en: "Designer",
          pt: "Designer"
        },
        linkedin: "https://www.linkedin.com/in/julianascimentocosta"
      },
      {
        name: "Richard Rodrigues",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/richardsros"
      }
    ],
    role: {
      en: "iOS Developer",
      pt: "Desenvolvedora iOS"
    },
    date: "2025",
    accentColor: "#FF4500",
    appStoreLink: "https://apps.apple.com/br/app/recapsule/id6756196189",
    features: [
      {
        en: "Capture photos and write down important moments every day",
        pt: "Capture fotos e escreva momentos importantes todos os dias"
      },
      {
        en: "Unlock daily memories through interactive mini-games and puzzles",
        pt: "Desbloqueie memórias diárias por meio de mini-jogos e puzzles interativos"
      },
      {
        en: "Transform each memory into something special with photo puzzles",
        pt: "Transforme cada memória em algo especial com puzzles de fotos"
      },
      {
        en: "Join friends to build photo streaks and unlock memories together",
        pt: "Convide amigos para criar sequências de fotos e desbloquear memórias juntos"
      },
      {
        en: "Simple, intuitive interface full of personality",
        pt: "Interface simples, intuitiva e cheia de personalidade"
      },
      {
        en: "Keep your memories safe and fun to revisit",
        pt: "Mantenha suas memórias seguras e divertidas de revisitar"
      }
    ]
  },
  {
    id: "freelaontap",
    title: "FreelaOnTap",
    shortDescription: {
      en: "A platform connecting freelancers and hospitality companies, solving the chaos and disorganization of job posting and prospecting in this sector.",
      pt: "Uma plataforma que conecta freelancers e empresas de hospitalidade, resolvendo o caos e a desorganização na divulgação e prospecção de vagas no setor."
    },
    description: {
      en: "Features job search and filtering, company registration, a job management dashboard, and direct contact via WhatsApp. It connects freelancers with hospitality companies in a streamlined, efficient way that benefits both sides of the marketplace.",
      pt: "Conta com busca e filtros de vagas, cadastro de empresas, painel de gerenciamento de vagas e contato direto via WhatsApp. Conecta freelancers e empresas de hospitalidade de forma fluida e eficiente, beneficiando os dois lados do mercado."
    },
    icon: projectIcons.freelaontap,
    technologies: ["UIKit", "Swift", "CloudKit", "Figma"],
    images: freelOnTapScreenshots,
    category: {
      en: "Business",
      pt: "Negócios"
    },
    team: [
      {
        name: "Ana Carolina Poletto",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/ana-poletto-2a7222318"
      },
      {
        name: "Adriel de Souza",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/dsadriel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        name: "Giulia Stefainski",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/giulia-cs?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        name: "Vinicius Cadore",
        role: {
          en: "Designer",
          pt: "Designer"
        },
        linkedin: "https://www.linkedin.com/in/cadoreee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        name: "Gustavo Bassani",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/gustavofbassani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      }
    ],
    role: {
      en: "iOS Developer",
      pt: "Desenvolvedora iOS"
    },
    date: "2024",
    accentColor: "#E57745",
    features: [
      {
        en: "Job search and advanced filtering for hospitality positions",
        pt: "Busca de vagas e filtros avançados para posições na hospitalidade"
      },
      {
        en: "Company registration and profile management system",
        pt: "Sistema de cadastro de empresas e gerenciamento de perfil"
      },
      {
        en: "Comprehensive job management dashboard for employers",
        pt: "Painel completo de gerenciamento de vagas para empregadores"
      },
      {
        en: "Direct contact via WhatsApp integration for instant communication",
        pt: "Contato direto via integração com WhatsApp para comunicação instantânea"
      },
      {
        en: "Streamlined platform connecting freelancers with hospitality companies",
        pt: "Plataforma fluida que conecta freelancers a empresas de hospitalidade"
      },
      {
        en: "Solves chaos and disorganization in job posting and prospecting",
        pt: "Resolve o caos e a desorganização na divulgação e prospecção de vagas"
      }
    ]
  },
  {
    id: "madots",
    title: "MaDots",
    shortDescription: {
      en: "A calm focus tracker where each Dot represents 15 minutes of real attention.",
      pt: "Um app de foco calmo em que cada Dot representa 15 minutos de atencao real."
    },
    description: {
      en: "MaDots helps you track focus with color, rhythm, and quiet insights. Instead of pressure, goals, or noisy charts, it invites you to notice your real attention and build a more present routine one Dot at a time.",
      pt: "MaDots ajuda voce a registrar foco com cor, ritmo e insights sutis. Em vez de pressao, metas ou graficos barulhentos, ele convida voce a perceber sua atencao real e construir uma rotina mais presente, um Dot de cada vez."
    },
    icon: projectIcons.madots,
    technologies: ["UIKit", "Swift", "Figma"],
    images: maDotsScreenshots,
    category: {
      en: "Focus",
      pt: "Foco"
    },
    team: [
      {
        name: "Ana Carolina Poletto",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedora iOS"
        },
        linkedin: "https://www.linkedin.com/in/ana-poletto-2a7222318"
      },
      {
        name: "Leonel Hernandez",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/leonelhernandezs"
      },
      {
        name: "Lorenzo Fortes",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/lorenzo-fortes-573666174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        name: "Pedro Lima",
        role: {
          en: "Designer",
          pt: "Designer"
        },
        linkedin: "https://www.linkedin.com/in/pedro-kosciuk-lima-a29855207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      },
      {
        name: "Gustavo Bassani",
        role: {
          en: "iOS Developer",
          pt: "Desenvolvedor iOS"
        },
        linkedin: "https://www.linkedin.com/in/gustavofbassani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      }
    ],
    role: {
      en: "iOS Developer",
      pt: "Desenvolvedora iOS"
    },
    date: "2025",
    accentColor: "#F5A524",
    features: [
      {
        en: "Choose your colors. Pick three focus categories and assign a color to each one. You decide what matters.",
        pt: "Escolha suas cores. Escolha 3 categorias de foco. Atribua uma cor a cada uma delas. Voce decide o que importa."
      },
      {
        en: "Start with a tap. Begin a 15-minute timer, and when it ends, a Dot is added to your timeline.",
        pt: "Comece com um toque. Inicie um cronometro de 15 minutos. Quando ele termina, um Dot e adicionado a sua linha do tempo."
      },
      {
        en: "See your patterns. Subtle insights help you notice when and how you focus best. No charts. No noise.",
        pt: "Veja os teus padroes. Insights sutis ajudam voce a ver quando e como voce se concentra melhor. Sem graficos. Sem ruidos."
      },
      {
        en: "Each Dot marks 15 minutes of real attention.",
        pt: "Cada Dot marca 15 minutos de atencao real."
      },
      {
        en: "No goals. No guilt. Just presence.",
        pt: "Sem metas. Sem culpa. Apenas presenca."
      }
    ]
  }
];

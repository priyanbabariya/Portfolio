import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Priyan Babariya",
  initials: "PB",
  url: "https://github.com/samiksha0shukla",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Blockchain Developer with 1+ years of experience in blockchain development, having worked on more than 5 live blockchain projects, including 2 large-scale international projects in DeFi and supply chain for clients in the USA and Thailand. I have proven experience in full-stack development, building secure smart contracts along with supporting backend infrastructure and integrations. I am highly focused on writing optimized, secure, and production-ready blockchain systems. Passionate about zero-knowledge proofs, blockchain infrastructure, and protocol development.",
  summary:
    "Blockchain Developer with 1+ years of experience in blockchain development, having worked on more than 5 live blockchain projects, including 2 large-scale international projects in DeFi and supply chain for clients in the USA and Thailand. I have proven experience in full-stack development, building secure smart contracts along with supporting backend infrastructure and integrations. I am highly focused on writing optimized, secure, and production-ready blockchain systems. Passionate about zero-knowledge proofs, blockchain infrastructure, and protocol development.",

  avatarUrl: "/me.webp",
  skills: [
    "Blockchain",
    "Rust",
    "Solidity",
    "JavaScript",
    "Hardhat",
    "Anchor",
    "Foundry",
    "Next.js",
    "web3.js",
    "ethers.js",
    "Nest.js",
    "Axum",
    "Slither",
    "base",
    "polygon",
    "hedera",
    "monad",
    "HTML",
    "CSS",
    "Ethereum",
    "Solana",
    "Tailwind CSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "priyanbabariya898@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/priyanbabariya",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyan-babariya-9b410b259/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PriyanBabariya",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rejolut PVT LTD",
      badges: [],
      href: "https://rejolut.com/",
      location: "On-site",
      title: "Blockchain Developer",
      logoUrl: "/rejolut-logo.webp",
      start: "April 2025",
      end: "November 2025",
      description:
        "• Worked on a DeFi protocol for the well-known US company Abra\n• Built licensed B2B on-chain exchange using EIP-1167 minimal proxy factory pattern.\n• Created cross-chain token swap with off-chain batching and gas optimization logic.\n• Engineered upgradeable DeFi apps and simulated reentrancy attack for security research.",
    },
    {
      company: "Flexion",
      href: "https://www.flexioninfotech.com/",
      badges: [],
      location: "On-site",
      title: "Front-end Blockchain Developer",
      logoUrl: "/flexion_infotech_india_logo.jpeg",
      start: "September 2024",
      end: "February 2025",
      description:
        "• Developed features and fixed critical bugs for Flowkar social platform.\n• Improved application performance and overall user experience.\n• Reduced build size from 600KB to 180KB using lazy loading.\n• Learned and transitioned into blockchain development.",
    },
  ],

  projects: [
    {
      title: "Abrafi",
      href: "https://github.com/priyanbabariya/Abrafi",
      //dates: "2024 - Present",
      active: true,
      description:
        "Abrafi is a decentralized interest-bearing token protocol where users stake USDC/USDT to earn yield via transferable iTokens. It auto-compounds interest, offering passive income with liquidity. iTokens can be used across DeFi for lending, trading, or collateralization without unstaking assets.",
      technologies: [
        "Solana",
        "Anchor",
        "Rust",
        "Jest",
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/Abrafi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Solviz",
      href: "https://github.com/priyanbabariya/Solviz",
      //dates: "2024",
      active: true,
      description:
        "NFT Marketplace where users can mint, trade, and manage NFTs securely on-chain.",
      technologies: [
        "Solana",
        "Anchor",
        "Rust",
        "Jest",
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/Solviz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tricomia-Gold",
      href: "https://github.com/priyanbabariya/Tricomia-Gold",
      //dates: "2024",
      active: true,
      description:
        "A licensed B2B product exchange platform enabling verified producers and authorized buyers to trade via on-chain smart contracts with full compliance and transparency. Utilized the EIP-1167 minimal proxy pattern through a factory contract to deploy proxies per trade, cutting deployment costs and boosting security and scalability.",
      technologies: [
        "Solidity",
        "JavaScript",
        "Hardhat",
        "Slither"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/Tricomia-Gold",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tricomia-event-listener-service",
      href: "https://github.com/priyanbabariya/Tricomia-event-listener-service",
      //dates: "2024",
      active: true,
      description:
        "built an event-listener service to track blockchain events and update order statuses in the database, enabling real-time transaction visibility. To ensure reliability, I implemented a cron-based fallback mechanism that handles missed events or server downtime, maintaining data consistency and improving overall operational robustness.",
      technologies: [
        "Nest Js",
        "TypeScript",
        "Prisma",
        "Cron"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/Tricomia-event-listener-service",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "reentrancy-attack-for-fun",
      href: "https://github.com/priyanbabariya/reentrancy-attack-for-fun",
      active: true,
      description:
        "A reentrancy attack demonstration project where Smart Contract A exploits a vulnerability in Smart Contract B to drain funds.",
      technologies: [
        "Solidity",
        "JavaScript",
        "Hardhat",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/reentrancy-attack-for-fun",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cross-Chain-Bridge",
      href: "https://github.com/priyanbabariya/Cross-Chain-Bridge",
      active: true,
      description:
        "Built a cross-chain token bridge with a burn-and-mint mechanism across chains. Developed an event listener service to monitor blockchain events and trigger cross-chain actions. Added a cron-based fallback system to recover missed events during server downtime, ensuring reliable and consistent transactions.",
      technologies: [
        "Solidity",
        "JavaScript",
        "Hardhat",
        "Nest JS",
        "TypeScript",
        "Prisma",
        "Cron",
        "React",
        "HTML",
        "CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/priyanbabariya/Cross-Chain-Bridge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;

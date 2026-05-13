import React from 'react';

/**
 * Content strategy:
 * Keep language specific, outcome-focused, and easy to scan.
 * Avoid repetitive action verbs and over-abstract phrasing.
 */

export const projects = [
    {
        id: 1,
        title: "Ariya Event Planning Platform",
        description: "End-to-end event planning product covering event websites, registries, guest lists, vendors, ticketing, budgets, and seating in one place.",
        tags: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
        image: "assets/ariya-hero.png",
        link: "https://github.com/johnthebelovedcoder/Ariya-backend",
        liveLink: "https://ariya-hqw-eb.vercel.app/",
        deviceType: "browser",
        metadata: {
            client: "Ariya",
            industry: "Event Planning SaaS",
            type: "Multi-Sided Planning Platform",
            year: "2023 – Present"
        },
        gallery: [
            "assets/ariya-hero.png"
        ],
        caseStudy: {
            overview: "Ariya is an end-to-end event planning platform where users can manage event websites, registries, guests, vendors, ticketing, budgets, and seating from one workspace.",
            goal: "Design and build a product that supports three user types (individual planners, professional planners, and vendors) without fragmenting the overall experience.",
            challenge: "We had to balance localization and scale at the same time: country-specific prices and formats, variable network quality, and heavy bursts of traffic during launches.",
            strategy: "I treated this as both a product design and systems problem: keep the UI consistent for users, make regional logic predictable behind the scenes, and protect critical flows under load.",
            leadership: "I owned key frontend-backend decisions, aligned implementation with product behavior, and defined deployment standards the team could trust release after release.",
            sections: [
                {
                    title: "01. Context",
                    content: "The product serves three distinct users: individual planners, professional planners, and vendors. Each group has different goals, but they all need to collaborate around the same event data."
                },
                {
                    title: "02. What I designed",
                    content: "I designed role-specific workflows for planning, operations, and vendor participation, while keeping one shared product language so handoffs between users stayed clear and predictable."
                },
                {
                    title: "03. What I built",
                    content: "I implemented the planning experience with Next.js and NestJS, including modules for event pages, registries, guest lists, vendors, tickets, budgets, and seating. I also added system protections and observability for high-traffic scenarios.",
                    list: [
                        "Versioned REST API with NestJS and TypeScript",
                        "Regional content and pricing handling",
                        "Redis-backed endpoint protection",
                        "SSR-first dashboard with Next.js App Router",
                        "Logging and monitoring setup for live operations"
                    ]
                },
                {
                    title: "04. Outcome",
                    content: "The result is a true all-in-one planning product where different user types can coordinate in the same system instead of stitching together multiple tools."
                }
            ]
        }
    },
    {
        id: 2,
        title: "CredalyUI Credit Scoring Infrastructure",
        description: "Alternative credit scoring infrastructure helping banks, microfinance banks, and insurers score thin-file applicants.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
        image: "assets/credaly-ui-hero.png",
        link: "https://github.com/johnthebelovedcoder/CredalyUI",
        liveLink: "https://johnthebelovedcoder.github.io/CredalyUI/",
        deviceType: "browser",
        metadata: {
            client: "Credaly",
            industry: "Fintech Risk Infrastructure",
            type: "Alternative Credit Scoring Platform",
            year: "2024"
        },
        gallery: [
            "assets/credaly-ui-hero.png"
        ],
        caseStudy: {
            overview: "CredalyUI is an alternative credit scoring infrastructure product used by banks, microfinance institutions, and insurance companies to evaluate thin-file applicants.",
            goal: "Make risk intelligence accessible and actionable so institutions can score applicants who lack traditional credit history.",
            challenge: "The core challenge was density: lots of technical information, sensitive actions, and state-heavy views that can easily become noisy or slow.",
            strategy: "I started with a clear design language and reusable patterns, then paired it with frontend architecture optimized for responsiveness on data-heavy screens.",
            leadership: "I led UI decisions, documentation structure, and implementation standards so the portal remained cohesive as features expanded.",
            sections: [
                {
                    title: "01. Context",
                    content: "Thin-file applicants are difficult to evaluate with traditional scoring models. The product needed to present clear, explainable scoring signals to decision-makers in regulated environments."
                },
                {
                    title: "02. What I designed",
                    content: "I designed high-trust workflows around scoring visibility, model explainability, and clear risk breakdowns so teams could review applicant strength with confidence."
                },
                {
                    title: "03. What I built",
                    content: "I built the product interface with Next.js and TypeScript, including data-rich scoring views, role-aware dashboards, and performance-safe component patterns for high-density financial data.",
                    list: [
                        "Next.js App Router foundation",
                        "Custom visualization components",
                        "Secure API key workflows and audit logs",
                        "Theme-aware component library",
                        "Sub-second transitions via code splitting"
                    ]
                },
                {
                    title: "04. Outcome",
                    content: "The outcome is a clearer decision surface for institutions scoring thin-file applicants, with stronger confidence, faster reviews, and better consistency in risk assessment."
                }
            ]
        }
    },
    {
        id: 3,
        title: "CredBevy AI Loan Marketplace",
        description: "AI-powered loan marketplace connecting lenders and borrowers through lender dashboards and a borrower mobile app.",
        tags: ["React", "React Native", "Zustand", "Micro-frontend Architecture"],
        image: "assets/credbevy-hero-v2.png",
        link: "https://github.com/johnthebelovedcoder",
        liveLink: "https://credbevy.com/",
        deviceType: "mobile",
        metadata: {
            client: "CredBevy Inc",
            industry: "Lending Marketplace",
            type: "Two-Sided AI Marketplace",
            year: "2022 – Present"
        },
        gallery: [
            "assets/credbevy-screen-1.png",
            "assets/credbevy-screen-2.png",
            "assets/credbevy-screen-3.png",
            "assets/credbevy-dashboard-1.png",
            "assets/credbevy-dashboard-2.png"
        ],
        caseStudy: {
            overview: "CredBevy is an AI-powered loan marketplace connecting lenders and borrowers. Lenders operate through dashboards, while borrowers interact through the mobile experience.",
            goal: "Create a cohesive two-sided product where lender operations and borrower journeys remain tightly connected, fast, and reliable.",
            challenge: "We were dealing with large bundles, rerender chains, and heavy data tables that made key workflows feel laggy, especially under real production load.",
            strategy: "I redesigned state boundaries, reduced rendering overhead, and added CI guardrails so performance became part of day-to-day delivery instead of a cleanup task.",
            leadership: "I led the migration roadmap, set quality and performance standards, and coached engineers on patterns that would hold up as the product grew.",
            sections: [
                {
                    title: "01. Context",
                    content: "Two user groups had very different product needs: lenders required data-heavy operations dashboards, while borrowers needed simple, trust-first mobile flows."
                },
                {
                    title: "02. What I designed",
                    content: "I designed the experience architecture around role clarity, ensuring lenders had powerful decision tools while borrowers had guided, low-friction application and repayment flows."
                },
                {
                    title: "03. What I built",
                    content: "I built the lender dashboards and borrower mobile experiences on shared product principles, implemented performance safeguards, and introduced scalable delivery standards across web and mobile.",
                    list: [
                        "Virtualized tables for 10k+ row scenarios",
                        "React Query + Zustand architecture",
                        "65% bundle reduction through code splitting",
                        "Feature flags for controlled UX rollouts",
                        "Lighthouse and security checks in CI"
                    ]
                },
                {
                    title: "04. Outcome",
                    content: "CredBevy now runs as a stronger two-sided marketplace experience: lenders can process complex loan workflows efficiently, and borrowers get a simpler, faster mobile journey.",
                    impact: {
                        metric: "65% Bundle Reduction · 92 Lighthouse · 95% Fewer Errors",
                        description: "Modernized frontend delivery with a performance-first architecture spanning web dashboards and mobile experiences."
                    }
                }
            ]
        }
    },
    {
        id: 4,
        title: "ContraLock Escrow Platform",
        description: "Escrow platform for the freelancer and gig economy, built around milestone-based payments and dispute handling.",
        tags: ["TypeScript", "Next.js", "Stripe", "OpenAI API"],
        image: "assets/contralock-hero.png",
        link: "https://github.com/johnthebelovedcoder/ContraLock",
        deviceType: "browser",
        metadata: {
            client: "ContraLock",
            industry: "Freelance/Gig Economy Fintech",
            type: "Escrow & Dispute Resolution Platform",
            year: "2024 – Present"
        },
        gallery: [
            "assets/contralock-hero.png"
        ],
        caseStudy: {
            overview: "ContraLock is an escrow platform designed for the freelancer and gig economy, where trust depends on transparent milestone and payout flows.",
            goal: "Protect both clients and freelancers with clear payment states, reliable release logic, and practical dispute resolution workflows.",
            challenge: "Any mismatch between UI state, backend state, and payment provider events can create confusion and erode trust immediately.",
            strategy: "I built around explicit state transitions, shared schemas, and webhook-driven updates so every step of the payment journey remained predictable.",
            leadership: "I defined monorepo boundaries, set secure API conventions, and led implementation standards for payment and dispute workflows.",
            sections: [
                {
                    title: "01. Context",
                    content: "Freelancers and clients both needed a single source of truth for milestone status, pending actions, and release conditions. Ambiguity in these moments is where disputes usually begin."
                },
                {
                    title: "02. What I designed",
                    content: "I designed the milestone journey as an explicit state machine, with clear transitions and dispute steps that surface useful evidence instead of vague status messages."
                },
                {
                    title: "03. What I built",
                    content: "I built a Turbo monorepo with shared TypeScript schemas, integrated Stripe webhook flows for payment consistency, and added AI-assisted dispute summaries to reduce review overhead.",
                    list: [
                        "Shared-schema monorepo across frontend, API, and AI service",
                        "Milestone-driven escrow state transitions",
                        "Stripe integration for deposit and payout events",
                        "AI-assisted dispute context summaries",
                        "Type-safe contracts across the full stack"
                    ]
                },
                {
                    title: "04. Outcome",
                    content: "The product now feels more transparent and dependable, with fewer state mismatches and stronger confidence during milestone releases and dispute resolution.",
                }
            ]
        }
    },
    {
        id: 5,
        title: "Plearnty Gamified Learning Platform",
        description: "A gamified educational platform that rewards users as they learn, built for a subsidiary of Sterling Bank.",
        tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        image: "assets/plearnty-hero.png",
        link: "https://github.com/johnthebelovedcoder",
        liveLink: "https://plearnty.unifyedu.ng/",
        deviceType: "browser",
        metadata: {
            client: "Plearnty (Sterling Bank)",
            industry: "EdTech",
            type: "Gamified Learning Platform",
            year: "2024 - 2025"
        },
        gallery: [
            "assets/plearnty-hero.png"
        ],
        caseStudy: {
            overview: "Plearnty is an interactive learning platform built for a Sterling Bank subsidiary. It leverages gamification and real-time reward mechanics to drive user engagement and knowledge retention.",
            goal: "Create an educational experience that feels more like a highly polished game than a traditional learning portal, bridging high-fidelity design with robust state management.",
            challenge: "Gamification requires instant visual feedback, smooth micro-interactions, and tight synchronization with backend reward systems. Any perceived lag or visual stutter breaks the immersion and trust in the rewards.",
            strategy: "I engineered a performance-first architecture focusing on seamless state transitions, using animation libraries and optimized re-renders to make the interface feel alive and responsive.",
            leadership: "I owned the frontend architecture, translating gamification concepts into a scalable UI and ensuring the final product matched the original design vision pixel-for-pixel.",
            sections: [
                {
                    title: "01. Context",
                    content: "The goal was to incentivize learning through a reward system. To succeed, the platform needed to immediately hook users with a visually appealing, interactive, and responsive interface."
                },
                {
                    title: "02. What I designed",
                    content: "I designed and implemented the interactive quiz interfaces, reward animations, and progress tracking visualizations, ensuring a seamless flow between answering questions and receiving feedback."
                },
                {
                    title: "03. What I built",
                    content: "I built the platform using React and Next.js, integrating complex state management for the quiz engine and reward synchronization.",
                    list: [
                        "High-performance quiz engine with instant validation",
                        "Smooth micro-interactions and transitions with Framer Motion",
                        "Real-time reward state synchronization",
                        "Responsive, mobile-first interactive layouts",
                        "Component architecture optimized for fast re-renders"
                    ]
                },
                {
                    title: "04. Outcome",
                    content: "Plearnty successfully launched as a highly engaging platform, proving that complex gamification mechanics can be delivered smoothly on the web without sacrificing performance or design fidelity."
                }
            ]
        }
    }
];

export const experience = [
    {
        role: "Senior Design Engineer",
        company: "CredBevy",
        location: "Nigeria",
        period: "Sep 2022 – Present",
        type: "Primary role",
        summary: "Leading the bridge between product design and engineering, owning high-fidelity frontend delivery and design system architecture for admin dashboards and mobile products.",
        bullets: [
            "Introduced React Query + Zustand state boundaries, removing redundant renders and reducing TTI to under 1.8s.",
            "Built virtualized data grids with react-window to handle 10k+ rows without blocking the main thread.",
            "Launched an A/B testing layer using Context API and remote config to speed up UX experiments.",
            "Set up GitHub Actions workflows with Lighthouse budgets and automated security checks for every PR.",
            "Mentored engineers on advanced React and React Native patterns while raising code review standards."
        ]
    },
    {
        role: "Design Engineer",
        company: "Plearnty (Sterling Bank Subsidiary)",
        location: "Nigeria",
        period: "Aug 2024 – Aug 2025",
        summary: "Designed and built the interactive web experience for a gamified educational platform that rewards users as they learn.",
        bullets: [
            "Engineered an engaging, high-performance quiz interface, optimizing for fast feedback loops and smooth transitions.",
            "Collaborated closely with product stakeholders to translate gamification concepts into a scalable, high-fidelity UI.",
            "Integrated real-time reward mechanics, ensuring state consistency and a seamless user experience across the platform."
        ]
    },
    {
        role: "Design Engineer (Design Systems Lead)",
        company: "Business in My Pocket (BiMP)",
        location: "Nigeria",
        period: "Jul 2023 – Jul 2024",
        summary: "Architected a unified React design system to bridge the gap between design vision and production code for a real estate marketplace.",
        bullets: [
            "Created a headless component library with Radix UI and accessible keyboard-first interactions.",
            "Documented components in Storybook and added Chromatic visual tests to prevent UI regressions.",
            "Mapped Tailwind tokens to Figma variables, improving consistency and reducing handoff friction.",
            "Guided migration from legacy custom CSS to the design system, reducing feature delivery time by 30%."
        ]
    },
    {
        role: "Design Engineer",
        company: "Total IT Stores",
        location: "Nigeria",
        period: "Sep 2023 – Dec 2023",
        summary: "Crafted high-performance e-commerce and booking experiences with a focus on polished interactions using Next.js.",
        bullets: [
            "Delivered SEO-friendly storefronts with minimal client payloads and faster page loads.",
            "Implemented reliable client-side state for advanced filters and dynamic catalog search.",
            "Improved checkout reliability through stronger validation and edge-case handling."
        ]
    },
    {
        role: "Lead Design Engineer",
        company: "Davino Group of Companies",
        location: "Nigeria, Kenya, Guinea",
        period: "Jul 2022 – Dec 2022",
        summary: "Directed frontend strategy and UX implementation for corporate platforms across three international markets.",
        bullets: [
            "Integrated headless CMS platforms (Sanity and Contentful) so non-technical teams could publish independently.",
            "Delivered cross-browser interfaces with asset optimization tuned for lower-bandwidth networks.",
            "Adopted modular CSS patterns that scaled cleanly across multiple regional products."
        ]
    },
    {
        role: "Founding Design Engineer",
        company: "TeenPay Africa",
        location: "Nigeria",
        period: "Sep 2021 – Sep 2022",
        summary: "Established the design-to-code foundation for a cross-platform fintech product, ensuring high-fidelity delivery across web and mobile.",
        bullets: [
            "Set up a Turborepo monorepo with shared types and schemas across web and mobile clients.",
            "Designed smooth React Native Reanimated flows that maintained 60fps interactions.",
            "Implemented real-time account linking with WebSockets and Server-Sent Events.",
            "Configured Fastlane pipelines for automated App Store and Google Play releases."
        ]
    },
    {
        role: "Design Engineer",
        company: "XXOL Care",
        location: "Nigeria",
        period: "Aug 2021 – Mar 2022",
        summary: "Led UX modernization and performance overhaul, migrating a legacy SPA to a polished Next.js experience.",
        bullets: [
            "Modeled multi-step booking flows in XState to eliminate unpredictable interface states.",
            "Used edge caching, dynamic imports, and `next/image` to reduce LCP by over 50%.",
            "Moved styling to a utility-first Tailwind setup, improving consistency and team velocity."
        ]
    }
];

export const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SASS"],
    frameworks: ["React.js", "Next.js", "React Native", "Vue.js", "Vite", "Node.js"],
    stateManagement: ["Redux Toolkit", "Zustand", "React Query", "Context API", "XState"],
    styling: ["Tailwind CSS", "Styled Components", "CSS Modules", "Radix UI", "Framer Motion"],
    design: ["Figma", "Design Systems", "Component Libraries", "Interaction Design", "Accessibility (WCAG/WAI-ARIA)", "Prototyping"],
    platforms: ["Web", "iOS", "Android", "Responsive Design", "Cross-Platform Architecture"],
    tools: ["Git/GitHub", "Webpack", "Storybook", "Jest", "React Testing Library", "Turborepo", "Fastlane", "GitHub Actions"]
};

export const personalInfo = {
    name: "TIMILEHIN ORIPELOYE",
    title: "Design Engineer | Bridging Product Design + Frontend Engineering (Web & Mobile)",
    email: "timilehinoripeloye@gmail.com",
    phone: "+234 905 538 0387",
    location: "Lagos, Nigeria",
    linkedin: "linkedin.com/in/oripeloye-timilehin-6a2835156",
    github: "github.com/johnthebelovedcoder",
    portfolio: "timilehinoripeloye.com",
    summary: "I am a Design Engineer with 5+ years of experience crafting high-fidelity web and mobile products. I live at the intersection of design thinking and production code, specializing in design systems, interaction design, and performant frontend architecture.",
    education: "B.Eng, Mechanical Engineering — University of Lagos (UNILAG) | 2015 – 2020"
};

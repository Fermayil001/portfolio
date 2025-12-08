import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { LiaGit } from "react-icons/lia";
import { RiBootstrapLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiFormik } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
//Social icons
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
// Portfolio data
import Eduguide from '../assets/images/eduguide.png'
import Agile from '../assets/images/agile.png'
import Movie from '../assets/images/movie.png'
import Trendora from '../assets/images/Trendora.png'

import type { ComponentType } from "react";

type SkillIcon = {
    icon: ComponentType<{ size?: number; className?: string }>;
    name: string;
};


export const skillIcons: SkillIcon[] = [
    { icon: AiOutlineHtml5, name: "HTML" },
    { icon: IoLogoCss3, name: "CSS" },
    { icon: RiBootstrapLine, name: "Bootstrap" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: TbBrandTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: SiRedux, name: "Redux" },
    { icon: SiMui, name: "Material-UI" },
    { icon: SiShadcnui, name: "Shadcn UI" },
    { icon: SiAntdesign, name: "Ant Design" },
    { icon: SiFormik, name: "Formik" },
    { icon: SiZod, name: "Zod" },
    { icon: SiJira, name: "Jira" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: LiaGit, name: "Git" },
    { icon: DiJqueryLogo, name: "jQuery" },
    { icon: FaGithub, name: "Github" },
];

type SocialIconsType = {
    icon: ComponentType<{ size?: number; className?: string }>;
    url: string;
};

export const SocialIcons: SocialIconsType[] = [
    { icon: SlSocialLinkedin, url: "https://www.linkedin.com/in/fermayil-hesenov/" },
    { icon: IoLogoInstagram, url: "https://www.instagram.com/23hasanovv/" },
    { icon: FaWhatsapp, url: "https://wa.me/994706571313" },
    { icon: VscGithubAlt, url: "https://github.com/Fermayil001" },
]

export interface PortfolioData {
    name: string,
    imgUrl: string,
    url: string,
    description: {
        az: string,
        en: string,
    },
    techStack: string,
}

export const portfolioData: PortfolioData[] = [
    {
        name: 'Eduguide',
        imgUrl: Eduguide,
        url: 'https://eduguide.az/',
        description: {
            az: 'Eduguide layihəsi istifadəçilərə universitet və ixtisas seçimi prosesində kömək edən, müxtəlif filtrlər və ekspert dəstəyi təklif edən veb platformadır. Layihə, istifadəçi dostu interfeys və geniş məlumat bazası ilə seçim prosesini asanlaşdırır. Platformanın admin paneli vasitəsilə tam şəkildə məzmun və istifadəçi idarəetməsini mövcuddur.',
            en: 'Eduguide is a web platform that helps users in the process of choosing a university and a major, offering various filters and expert support. With its user-friendly interface and extensive database, the project simplifies the selection process. The platform also provides full content and user management through an admin panel.',
        },
        techStack: 'React, Vite, Redux Toolkit, React Router DOM, Axios, Formik, Yup, Tailwind CSS, Material-UI, Ant Design, PrimeReact, FontAwesome, Lucide React, React-Toastify, SweetAlert2, Day.js, uuid, Tiptap, Lexical, Remirror, Quill, dnd-kit, React DnD, React Slick, Swiper',
    },
    {
        name: 'AgilePulse',
        imgUrl: Agile,
        url: 'https://agilepulse.org/',
        description: {
            az: 'AgilePulse layihəsi çevik idarəetmə və təlim proseslərini asanlaşdırmaq üçün hazırlanmış veb platformadır. İstifadəçilər burada təlimlərə qoşula, imtahanlar verə və Agile ilə bağlı müxtəlif kitabları oxuya bilərlər. Platforma həmçinin admin paneli vasitəsilə məzmun və istifadəçi idarəetməsini təmin edir.',
            en: 'AgilePulse is a web platform designed to facilitate agile management and training processes. Users can join training sessions, take exams, and read various books related to Agile. The platform also provides content and user management through an admin panel.'
        },
        techStack: 'React, TypeScript, Vite, Redux Toolkit, React Redux, React Router DOM, React Hook Form, Formik, Yup, i18next, react-i18next, Day.js, html-to-image, react-pdf, pdfjs-dist, Tailwind CSS, Sass, Material-UI, Framer Motion, React Icons, MUI X Charts, React Minimal Pie Chart, React-Toastify, SweetAlert2, Embla Carousel, React Slick, Slick Carousel',
    },
    {
        name: 'Trendora E-commerce',
        imgUrl: Trendora,
        url: 'https://trendora-indol.vercel.app/',
        description: {
            az: 'Trendora Next.js (app dir) və TypeScript istifadə edərək hazırlanmış tam funksional e-ticarət platformasıdır. İstifadəçi qeydiyyatı, məhsul səhifələri, səbət və sifariş axını, wishlist, məhsul rəyləri və admin üçün idarəetmə paneli dəstəklənir. Backend üçün API routeları və Prisma ilə verilənlər bazası inteqrasiyası mövcuddur.',
            en: 'Trendora is a fully functional e-commerce platform built with Next.js (App Router) and TypeScript. It includes user authentication, product pages, cart and checkout flow, wishlist functionality, product reviews, and an admin dashboard for management. The backend is powered by API Routes and a Prisma-integrated database structure.'
        },
        techStack: 'Next.js, React, TypeScript, MUI, Tailwind CSS, Emotion, Next.js API Routes, NextAuth, Zustand, React Query, Prisma, MongoDB, Formidable, Cloudinary, Bcrypt, Formik, Yup, React Icons, Swiper, React Toastify, Day.js, ESLint, Vercel',
    },
    {
        name: 'Movie Land',
        imgUrl: Movie,
        url: 'https://intern-intelligence-moviewebsite.vercel.app/',
        description: {
            az: 'Movie Land filmləri izləmək, axtarmaq və sevimlilər siyahısına əlavə etmək imkanı verən interaktiv bir film platformasıdır. İstifadəçi dostu interfeys və rahat naviqasiya ilə filmlər haqqında ətraflı məlumat əldə etmək mümkündür. Layihənin əsas məqsədi film həvəskarları üçün rahat və funksional bir mühit yaratmaqdır.',
            en: 'Movie Land is an interactive film platform that allows users to watch movies, search for them, and add them to their favorites list. With a user-friendly interface and easy navigation, users can access detailed information about films. The main goal of the project is to create a convenient and functional environment for movie enthusiasts.'
        },
        techStack: 'React, TypeScript, Vite, Redux Toolkit, React Redux, React Router DOM, Axios, Tailwind CSS, Material-UI, React Icons, React Loading Skeleton, SweetAlert2',
    },

]

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
//Social icons
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";


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
    { icon: SiRedux, name: "Redux" },
    { icon: SiMui, name: "Material-UI" },
    { icon: SiAntdesign, name: "Ant Design" },
    { icon: SiFormik, name: "Formik" },
    { icon: SiJira, name: "Jira" },
    { icon: SiPostman, name: "Postman" },
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

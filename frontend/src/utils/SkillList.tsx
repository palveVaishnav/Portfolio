import {
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandTailwind,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandReact,
    IconBrandNodejs,
    IconBrandNextjs,
    IconBrandDocker,
    IconBrandAws,
    IconDatabase,
    IconBrandCloudflare,
    IconBrandPython,
    IconBrandCpp as IconBrandC,
    IconDatabase as IconBrandPostgresql,
    IconBrandPrisma,
    IconBrandGithub,
    IconBrandTabler,
    // IconBrandGit
} from "@tabler/icons-react";

import { ReactElement } from 'react';

interface Skill {
    name: string;
    des: string;
    svg: ReactElement; // Optional, since one of your skills is missing the SVG
    type: string[]; // Array of strings
}


export const skillList:Skill[] = [
    {
        name: "HTML5",
        des: "The backbone of web content structure.",
        svg: <IconBrandHtml5 stroke={1} />,
        type:["frontend","web"],
    },
    {
        name: "CSS3",
        des: "Styles that bring life and design to web pages.",
        svg: <IconBrandCss3 stroke={1} />,
        type:["frontend","web"],
    },
    {
        name: "TailwindCSS",
        des: "Utility-first CSS framework for rapid UI development.",
        svg: <IconBrandTailwind stroke={1} />,
        type:["frontend","web"],
    },
    {
        name: "JavaScript",
        des: "The language that powers dynamic web experiences.",
        svg: <IconBrandJavascript stroke={1} />,
        type:["frontend","web","programming"],
    },
    {
        name: "TypeScript",
        des: "JavaScript with added type safety and clarity.",
        svg: <IconBrandTypescript stroke={1} />,
        type:["frontend","web","programming"],
    },
    {
        name: "React",
        des: "A library for building fast and interactive UIs.",
        svg: <IconBrandReact stroke={1} />,
        type:["frontend","web"],
    },
    {
        name: "Express",
        des: "Minimalist framework for building web applications on Node.js.",
        svg: <IconBrandNodejs stroke={1} />, // Express doesn't have a direct icon, using Node.js instead
        type:["backend","web"],
    },
    {
        name: "Node",
        des: "JavaScript runtime for server-side programming.",
        svg: <IconBrandNodejs stroke={1} />,
        type:["backend","web","programming"],
    },
    {
        name: "MongoDB",
        des: "NoSQL database for flexible, document-oriented data storage.",
        svg: <IconDatabase stroke={1} />,
        type:["backend","database"],
    },
    {
        name: "Next",
        des: "React framework for building server-rendered web apps.",
        svg: <IconBrandNextjs stroke={1} />,
        type:["frontend","backend","web"],
    },
    {
        name: "PostgreSQL",
        des: "Advanced open-source relational database management system.",
        svg: <IconBrandPostgresql stroke={1} />,
        type:["backend","database"],
    },
    {
        name: "Prisma",
        des: "Next-generation ORM for Node.js and TypeScript.",
        svg: <IconBrandPrisma stroke={1} />,
        type:["backend","tools","database"],
    },
    {
        name: "SQL",
        des: "Language for managing and querying relational databases.",
        svg: <IconDatabase stroke={1} />,
        type:["backend","database","programming"],
    },
    {
        name: "Shadcn/UI",
        des: "A UI framework for building accessible web applications.",
        svg: <IconBrandTabler stroke={1} />, // Tabler icon as a placeholder
        type:["frontend","tools"],
    },
    {
        name: "Magic UI",
        des: "A modern UI library with a focus on flexibility.",
        svg: <IconBrandTabler stroke={1} />, // Tabler icon as a placeholder
        type:["frontend","tools"],
    },
    {
        name: "Docker",
        des: "Platform for automating the deployment of applications in containers.",
        svg: <IconBrandDocker stroke={1} />,
        type:["environment","devops"],
    },
    {
        name: "AWS",
        des: "Comprehensive cloud computing platform by Amazon.",
        svg: <IconBrandAws stroke={1} />,
        type:["environment","devops","deployment"],
    },
    {
        name: "Cloudflare",
        des: "Service that enhances security and performance for websites.",
        svg: <IconBrandCloudflare stroke={1} />,
        type:["tools","devops"],
    },
    {
        name: "Python",
        des: "Versatile language known for readability and wide usage.",
        svg: <IconBrandPython stroke={1} />,
        type:["programming"],
    },
    {
        name: "C",
        des: "Powerful system programming language with wide hardware support.",
        svg: <IconBrandC stroke={1} />,
        type:["programming"],
    },
    {
        name: "Java",
        des: "Object-oriented language for building cross-platform applications.",
        svg: <img src="https://svgmix.com/uploads/b0ade4-java.svg" style={{height:'4rem'}} />,
        type:["programming"],
    },
    {
        name: "Github",
        des: "A Version Control Platform",
        svg: <IconBrandGithub stroke={1} />,
        type:["tools","devops"],
    },
];

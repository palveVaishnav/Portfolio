import { HoverCardDemo } from "@/components/HoverCard";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
export default function Skills() {
    return (
        <>
            From Skills
        </>
    );
}

export function SkillGrid() {
    const skillList = [
        { name: "HTML5", des: "The backbone of web content structure." },
        { name: "CSS3", des: "Styles that bring life and design to web pages." },
        { name: "TailwindCSS", des: "Utility-first CSS framework for rapid UI development." },
        { name: "JavaScript", des: "The language that powers dynamic web experiences." },
        { name: "TypeScript", des: "JavaScript with added type safety and clarity." },
        { name: "React", des: "A library for building fast and interactive UIs." },
        { name: "Express", des: "Minimalist framework for building web applications on Node.js." },
        { name: "Node", des: "JavaScript runtime for server-side programming." },
        { name: "MongoDB", des: "NoSQL database for flexible, document-oriented data storage." },
        { name: "Next", des: "React framework for building server-rendered web apps." },
        { name: "PostgreSQL", des: "Advanced open-source relational database management system." },
        { name: "Prisma", des: "Next-generation ORM for Node.js and TypeScript." },
        { name: "SQL", des: "Language for managing and querying relational databases." },
        { name: "Shadcn/UI", des: "A UI framework for building accessible web applications." },
        { name: "Magic UI", des: "A modern UI library with a focus on flexibility." },
        { name: "Docker", des: "Platform for automating the deployment of applications in containers." },
        { name: "AMAZONAWS", des: "Comprehensive cloud computing platform by Amazon." },
        { name: "Cloudflare", des: "Service that enhances security and performance for websites." },
        { name: "Python", des: "Versatile language known for readability and wide usage." },
        { name: "C", des: "Powerful system programming language with wide hardware support." },
        { name: "Java", des: "Object-oriented language for building cross-platform applications." },
    ];

    // const slugs = skillList.map(skill => skill.name.toLowerCase());
    // interface SkillProps {
    //     skill: {
    //         name: string;
    //         des: string;
    //     };
    // }

    const cards = skillList.map((skill, index) => (
        <div>
            <div key={index} className="p-2 border rounded-lg hover:shadow-md">
                <HoverCardDemo skill={skill} />
            </div>
        </div>
    ));

    return (
        <>
            {cards}
        </>
    );
}

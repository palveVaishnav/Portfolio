import { HoverCardDemo } from "@/components/HoverCard";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skillList } from "@/utils/SkillList";
import { useContext, useState, createContext } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {

}

// interface Skill {
//     name: string;
//     des: string;
//     svg?: ReactElement; // Optional, since one of your skills is missing the SVG
//     type: string[]; // Array of strings
// }


const DomainContext = createContext<string>("All");

export default function Skills() {
    const [selectedDomain, setSelectedDomain] = useState("All"); // State to store the selected item    
    return (
        <div className="m-4 grid place-content-center gap-4">
            <Select onValueChange={(value) => setSelectedDomain(value)}>
                <SelectTrigger className="w-[180px] shadow-lg border">
                    <SelectValue placeholder="All" className="" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Domain</SelectLabel>
                        <SelectItem value="All" className="font-bold">All</SelectItem>
                        <SelectItem value="web">Web</SelectItem>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="database">DataBase</SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="tools">Tools</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                        <SelectItem value="devOps">DevOps</SelectItem>
                        <SelectItem value="deployment">Deployment</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {/* <div className="m-4 grid place-content-center"> */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-content-center">
                        <DomainContext.Provider value={selectedDomain}>
                            <RenderSkills />
                        </DomainContext.Provider>
                    </div>
            {/* </div> */}
        </div>
    )
}


export function RenderSkills() {
    const domain = useContext(DomainContext);
    return (
        skillList
            .filter((skill) => skill.type.includes(domain) || domain === "All")
            .map((skill) => (
                <div className="p-2 border rounded-lg hover:shadow-md">
                    <HoverCardDemo skill={skill} />
                </div>
            ))
    );
}

// export function SkillGrid() {
//     const cards = skillList.map((skill, index) => (
//         <div key={index} className="p-2 border rounded-lg hover:shadow-md">
//             <HoverCardDemo skill={skill} />
//         </div>
//     ));
//     return (
//         <>
//             {cards}
//         </>
//     );
// }
import { HoverCardDemo } from "@/components/HoverCard";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import IconCloudDemo from "@/components/IconCloud";
import { skillList } from "@/utils/SkillList";

export default function Skills() {
    return (
        <div className="grid place-content-center xl:h-screen">
            <div className="grid xl:grid-cols-2 m-2 place-content-center md:px-10 lg:px-[12rem]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-content-center overflow-hidden gap-2">
                    <SkillGrid />
                </div>
                <div className="z-10 grid place-content-center">
                    <div>
                        <IconCloudDemo />

                    </div>
                </div>
            </div>
        </div>
    );
}

export function SkillGrid() {
    const cards = skillList.map((skill, index) => (
        <div key={index} className="p-2 border rounded-lg hover:shadow-md">
            <HoverCardDemo skill={skill} />
        </div>
    ));

    return (
        <>
            {cards}
        </>
    );
}

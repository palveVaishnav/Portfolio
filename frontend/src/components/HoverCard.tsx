// import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
// import RenderedIcon from "./RenderIcon"
import { ReactNode } from "react";

interface SkillProps {
    skill: {
        name: string;
        des: string;
        svg: ReactNode;
    };
}

export const HoverCardDemo: React.FC<SkillProps> = ({ skill }) => {
    return (
        <HoverCard >
            <HoverCardTrigger asChild className="grid place-content-center gap-1 w-full">
                <Button variant="link" className="overflow-hidden ">
                    <div className="flex justify-center gap-2 overflow-hidden">
                        <div className="block sm:flex justify-between space-x-4">                            
                            {skill.name}
                        </div>
                    </div> 
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 rounded-lg shadow-xl">
                <div className="flex justify-between space-x-4">
                    <div className="bg-whit">
                        {/* <RenderedIcon iconSlug={skill.name.toLowerCase()} /> */}
                        {skill.svg}
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{skill.name}</h4>
                        <p className="text-sm">
                            {skill.des}
                        </p>
                        <div className="flex items-center pt-2">                          
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

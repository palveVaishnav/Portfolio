import { SocialBar } from "@/components/Socials";
import { BentoGridMobile } from "@/components/ProjectsGrid";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextChanger } from "@/components/AnimatedTyping";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    return (
        <div className="grid w-full">
            <div>
                <Lander />
            </div>
        </div>
    );
}


function Lander() {
    return <>
        <div className="grid relative">
            {/* Hero Area */}
            <div className="absolute top-1 right-1">
                <ModeToggle />
            </div>
            <div className="h-[] p-5 flex flex-col justify-center gap-1">
                <div className=" h-3/4 grid place-content-center">
                    <div className="text-3xl">
                        {"Vaishnav Palve"}
                        <TextChanger />
                    </div>
                </div>
                <div className="flex justify-center h-1/4">
                    <SocialBar />
                </div>
            </div>

            <ComponentEnd />

            {/* Projects  */}
            <div className="grid place-content-center">
                <div className="flex justify-between items-center p-4">
                    <div className="text-lg primaryColorText font-serif md:text-xl lg:text-2xl">
                        My Projects
                    </div>
                    <div className=" py-1 px-2 text-sm">
                        <Link to="/skills" >
                            <Button >
                                View Skills {">>"}
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Project Cards */}
                <div>
                    <BentoGridMobile />
                </div>
            </div>
            <ComponentEnd />
        </div>
    </>
}



function ComponentEnd() {
    return (
        <div className="m-4 flex justify-center">
            <Separator orientation="horizontal" className="w-28 bg-black dark:bg-white" />
        </div>
    )
}




import { SocialBar } from "@/components/Socials";
import { BentoGridMobile } from "@/components/ProjectsGrid";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextChanger } from "@/components/AnimatedTyping";
import { ModeToggle } from "@/components/mode-toggle";
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
    return (
        <div className="grid w-full">
            <Lander />
        </div>
    );
}


function Lander() {
    return <>
        <div className="grid relative mb-60">
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
                <div className="grid place-content-center h-1/4">
                    <SocialBar />
                </div>
            </div>
            <Link target="_blank" to={'https://drive.google.com/file/d/1AfmpXO8SPj8yjlzoLkkiurcqVPgriU4q/view?usp=sharing'} className="border rounded-md w-fit justify-self-center mt-10 hover:bg-primary hover:text-white dark:hover:text-black py-2 px-4">
                Resume
            </Link>

            <ComponentEnd />


            {/* Projects  */}
            <div className="grid place-content-center">
                <div className="flex justify-between items-center p-4">
                    <div className="text-lg primaryColorText dark:text-white font-serif md:text-xl lg:text-2xl">
                        My Projects
                    </div>
                    <div className=" py-1 px-2 text-sm">
                        <Link to="/skills" >
                            <Button className="dark:bg-[#00000040] text-white border border-[#00000050]">
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

            <div className="place-content-center text-left gap-4 hidden md:grid">
                <span className="font-semibold" >Github : </span>
                <GitHubCalendar username="palvevaishnav" />
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




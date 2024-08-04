
import { BoxRevealDemo } from "@/components/TextRevail";
import { SocialBar } from "@/components/Socials";
import { BentoGridDemo, BentoGridMobile } from "@/components/ProjectsGrid";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import IconCloudDemo from "@/components/IconCloud";

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
        <div className="grid">

            {/* Landing Area */}
            <div className="h-[70vh] p-5 flex flex-col justify-center gap-1">
                <div className=" h-3/4 grid content-center pl-1 md:pl-[10rem] lg:pl-[15rem]">
                    <div className="text-3xl">
                        <BoxRevealDemo />
                    </div>
                </div>
                <div className="flex justify-center h-1/4 ">
                    <SocialBar />
                </div>
            </div>

            <ComponentEnd />

            {/* Projects  */}
            <div className="grid place-content-center">
                <div className="flex justify-between p-4">
                    <div className=" py-1 px-2 rounded-md text-lg primaryColorText font-serif md:text-xl lg:text-2xl">
                        My Projects
                    </div>
                    <div className=" py-1 px-2 text-sm">
                        <Link to="/Projects" >
                            <Button >
                                View All {">>"}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <BentoGridMobile />
                </div>
            </div>

            <ComponentEnd />

            {/* Tech Stack  */}

            <div className="grid place-content-center">
                <div className="flex justify-between p-4">
                    <div className=" py-1 px-2 rounded-md text-lg primaryColorText font-serif md:text-xl lg:text-2xl">
                        Skills 
                    </div>
                    <div className=" py-1 px-2 text-sm">
                        <Link to="/skills" >
                            <Button >
                                View All {">>"}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="grid md:flex">
                    <div className="hidden md:grid grid-cols-4 place-content-center">
                        <div className="p-2 devBorderBlack m-1 rounded-lg">HTML</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">CSS</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">JavaScript</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">TypeScript</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Java</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">C</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Python</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">SQL</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">PostgreSQL</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">MongoDB</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Express</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">React</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">AWS</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Docker</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Prisma</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">Git</div>
                        <div className="p-2 devBorderBlack m-1 rounded-lg">GitHub</div>
                    </div>
                    <div>
                        <IconCloudDemo />
                    </div>
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




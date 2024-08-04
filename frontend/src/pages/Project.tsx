import { BentoGridDemo } from "@/components/ProjectsGrid";

export default function Projects(): JSX.Element {
    return (
        <div className="my-4 grid place-content-center gap-4">
            <h1 className="text-2xl md:text-3xl">List Below are My Projects</h1>
            <BentoGridDemo />
        </div>
    )
}


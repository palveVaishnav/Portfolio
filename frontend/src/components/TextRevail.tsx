import BoxReveal from "@/components/magicui/box-reveal";
import { TextChanger } from "./AnimatedTyping";

export const BoxRevealDemo = () => {
    return (
        <div className="h-full w-full items-center justify-center">
            <BoxReveal boxColor={"#b46738"} duration={0.5}>
                <p className="py-4 text-[2.1rem] sm:text-[3rem] md:text-[4.5rem] font-semibold ">
                    Creating Solutions<span className="text-[#000] dark:text-[#d6d3d3]">,</span><br />
                </p>
            </BoxReveal>
            <BoxReveal boxColor={"#b46738"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-mono">
                    <p className="text-[#000] dark:text-[#d6d3d3]">One <TextChanger /> at a time!</p>
                </h2>
            </BoxReveal>
        </div>
    );
}

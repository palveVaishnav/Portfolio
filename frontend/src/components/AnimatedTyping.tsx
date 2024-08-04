import TypingAnimation from "@/components/magicui/typing-animation";
import { useEffect, useState } from "react";

export function TextChanger() {
    const changingTag = ["Challenge..","Idea..", "Problem..", "Solution..",  "Project..", "Journey.."];
    const [currentTagIndex, setCurrentTagIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTagIndex(prevIndex => (prevIndex + 1) % changingTag.length);
        }, 3000); // Change tag every 3 seconds

        return () => {
            clearInterval(timer);
        };
    }, []);

    // useEffect(() => { }, [currentTagIndex])

    return (
        <TypingAnimation
            key={currentTagIndex}
            className="text-4xl sm:text-5xl md:text-6xl my-1 sm:my-2 md:my-3 font-bold primaryColorText dark:primaryColorText"
            text={changingTag[currentTagIndex]}
        />
    )
}

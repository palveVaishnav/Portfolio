import TypingAnimation from "@/components/magicui/typing-animation";
import { useEffect, useState } from "react";
import { skillList } from '../utils/SkillList';

export function TextChanger() {
    const changingTag: string[] = [];
    skillList.map((skill) => {
        changingTag.push(skill.name)
    })
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
            className="text-xl opacity-30 primaryColorText dark:primaryColorText"
            text={changingTag[currentTagIndex]}
        />
    )
}

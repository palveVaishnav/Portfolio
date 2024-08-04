"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
    fetchSimpleIcons,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

export type DynamicIconProps = {
    iconSlug: string;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function RenderedIcon({ iconSlug }: DynamicIconProps) : JSX.Element {

    const [, setData] = useState<IconData | null>(null);
    const [icon, setIcon] = useState<SimpleIcon | null>(null);
    const { theme } = useTheme();
    // console.log(data)
    useEffect(() => {
        fetchSimpleIcons({ slugs: [iconSlug] }).then((fetchedData) => {
            setData(fetchedData);
            if (fetchedData.simpleIcons[iconSlug]) {
                setIcon(fetchedData.simpleIcons[iconSlug]);
            }
        });
    }, [iconSlug]);

    const renderedIcon = useMemo(() => {
        if (!icon) return null;
        return renderCustomIcon(icon, theme || "light");
    }, [icon, theme]);


    const IfNotPresent = ()=>{
        return(<>
            Not
        </>)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {renderedIcon ? renderedIcon : IfNotPresent() }
        </div>
    );
}
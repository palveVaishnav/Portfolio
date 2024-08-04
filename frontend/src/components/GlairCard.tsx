
// import { title } from "process";
import { GlareCard } from "./ui/glare-card";

export function GlareCardDemo({ title }) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4">          
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 max-h-4 overflow-hidden">
                <img
                    className="h-full w-full absolute inset-0 object-cover overflow-hidden"
                    src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className="font-bold text-white text-lg z-10">{title}</p>
                {/* <p className="font-normal text-base text-neutral-200 mt-4">
                    {des}
                </p> */}
            </GlareCard>
        </div>
    );
}

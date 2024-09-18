//  add svg in the Icons and data in the DATA and thats it 
// import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DATA } from "@/utils/SocialList";

export function SocialBar() {
  return (
    <div className="relative flex flex-col items-center justify-center h-fit overflow-hidden">
      <TooltipProvider >
        <Dock direction="middle" className="shadow-md rounded-lg">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
              {name === "Email" && <Separator orientation="vertical" className="h-full py-2 bg-black dark:bg-white" />}
            </DockIcon>

          ))}
          {/* <Separator orientation="vertical" className="h-full py-2 hidden" />           */}
        </Dock>
      </TooltipProvider>
    </div>
  );
}

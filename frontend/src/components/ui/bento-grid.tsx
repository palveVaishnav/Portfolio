import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  repo,
  url,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  repo: string | "";
  url: string | "";
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] lightbg dark:bg-zinc-800 border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-normal dark:text-neutral-600 mt-4 flex justify-end items-center gap-2">
          <a className={`border px-[6px] py-[4px] rounded-md bg-[#e8e8e8] dark:bg-[#1b1b1b] dark:text-neutral-50 hover:bg-[#333] hover:text-white dark:border-neutral-700 ${repo === "" ? 'cursor-not-allowed' : ''}`} href={repo} target="_blank">
            Repo
          </a>
          <a className={`border px-[6px] py-[4px] rounded-md bg-[#e8e8e8] dark:bg-[#1b1b1b] dark:text-neutral-50 hover:bg-[#333] hover:text-white dark:border-neutral-700 ${url === "" ? 'cursor-not-allowed' : ''}`} href={url} target="_blank">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

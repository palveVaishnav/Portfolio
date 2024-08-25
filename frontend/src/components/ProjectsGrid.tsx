import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconDeviceGamepad2,
  IconFiles,
  IconHeartbeat,
  IconHome,
  IconUserStar,
} from "@tabler/icons-react";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          repo={item.repo}
          url={item.url}
          className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
        />
      ))}
    </BentoGrid>
  );
}


export function BentoGridMobile() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className={i > 2 ? "hidden " : ""}
        >
          <BentoGridItem

            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            repo={item.repo}
            url={item.url}
            className="h-full w-full"
          />
          <div>

          </div>
        </div>
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
  </div>
);
const items = [
  {
    title: "ArogyArpan",
    repo: "https://github.com/palveVaishnav/arogyarpan",
    url: "https://arogyarpan.vercel.app/",
    description: "Platform for crowd fundraising in case of medical emergencies.",
    header: <Skeleton />,
    icon: <IconHeartbeat className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Roomer",
    repo: "https://github.com/palveVaishnav/roomer",
    url: "",
    description: "A Age finding website.",
    header: <Skeleton />,
    icon: <IconHome className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "NoteHub",
    repo: "https://github.com/palveVaishnav/notehub",
    url: "https://note-hub-one.vercel.app/",
    description: "Notes Sharing Platform for Students.",
    header: <Skeleton />,
    icon: <IconFiles className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio",
    repo: "https://github.com/palveVaishnav/portfolio",
    url: "https://palvevaishnav.vercel.app/",
    description: "A professional portfolio website.",
    header: <Skeleton />,
    icon: <IconUserStar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sudoku",
    repo: "https://github.com/palveVaishnav/sudoku",
    url: "https://sudoku-ten-alpha.vercel.app/",
    description: "A simple Sudoku game.",
    header: <Skeleton />,
    icon: <IconDeviceGamepad2 className="h-4 w-4 text-neutral-500" />,
  },
];

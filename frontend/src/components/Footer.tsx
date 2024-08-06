import { pages } from "@/utils/pageList"
import { Separator } from "./ui/separator"
import { DATA } from "@/utils/SocialList"

export default function Footer() {

    return (
        <div className="grid ternaryColor md:grid-cols-2 lg:grid-cols-3 p-4 rounded-t-xl dark:bg-inherit dark:border-white">
            <div className="grid p-4">
                <p className="text-sm">All rights reserved</p>
                <a href="/home">
                    <p className="font-bold font-mono text-xl md:text-2xl lg:text-3xl">Vaishnav Palve</p>
                </a>
                <p className="text-sm font-light">
                    A CS student driven by curiosity and innovation across multiple tech domains.
                </p>
                <div className="flex space-x-2">
                    <p>WEB</p>
                    <Separator orientation="vertical" className="h-full mx-1 bg-gray-400" />
                    <p>S/W</p>
                </div>
            </div>
            {/* Pages */}
            <div className="grid p-4">
                <div className="">
                    <p className="font-bold font-mono md:text-xl lg:text-2xl">Pages/Navigate</p>
                    <div className="grid grid-cols-2">
                        {
                            pages.map((page) => {
                                return <a href={page} className="font-light hover:underline">{page}</a>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="grid p-4">
                <div className="">
                    <p className="font-bold font-mono md:text-xl lg:text-2xl">Socials</p>
                    <div className="grid grid-cols-2">
                        {Object.entries(DATA.contact.social).map(([name, social]) => (
                            <div key={name}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    className="hover:underline font-light"                                    
                                >
                                    <p>{name}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}
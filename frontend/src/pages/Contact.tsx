import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { MailIcon, MapPin } from "lucide-react";

export default function Contact() {
    return (<>
        <div className="h-screen grid lg:flex rounded-xl secondaryColor overflow-hidden md:m-10 ">
            <div className="p-5 w-full grid content-center gap-6 bg-zinc-300">

                <div className="grid w-full h-full p-2 gap-3">
                    <p className="text-lg md:text-xl lg:text-3xl font-mono font-bold">Get in Touch</p>
                    <div className="font-light">

                        <p className="md:text-lg">
                            Just tell me about your project and we can chat.
                            <br />
                            Happy to hear your ideas!!
                        </p>
                        <div className="flex items-center space-x-2">
                            <MapPin strokeWidth={.5}/>
                            <p>Pune,Maharashtra <br />India </p>

                        </div>
                        <a className="flex items-center space-x-2 hover:font-medium" href="mailto:palvevaishnav09@gmail.com">
                            <MailIcon strokeWidth={.5}/>
                            <p className="md:text-lg">palvevaishnav09@gmail.com</p>
                        </a>
                    </div>
                </div>

            </div>

            <div className="p-5 w-full grid place-content-center gap-6">
                <div className="grid lg:flex gap-2">
                    <div className="flex w-full items-center gap-2">
                        <Label className="hidden md:block" htmlFor="name">Name</Label>
                        <Input type="name" id="name" placeholder="Name" />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <Label className="hidden md:block" htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="flex w-full items-center gap-2">
                    <Label className="hidden md:block" htmlFor="topic">Topic</Label>
                    <Input type="topic" id="topic" placeholder="Topic" />
                </div>
                <div className="grid w-full gap-2">
                    <Label className="hidden md:block" htmlFor="message">Message</Label>
                    <div className="h-[30vh] w-full">
                        <Textarea placeholder="Type your message here." />
                    </div>
                    <Button>Send message</Button>
                </div>
            </div>
        </div>
    </>)
}

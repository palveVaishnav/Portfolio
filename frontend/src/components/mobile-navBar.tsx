"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
// import { ToggleOutline } from "./toggle-item";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ModeToggle } from './mode-toggle'
import { Toggle } from "@/components/ui/toggle"
import { Link } from "react-router-dom";

//pages
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import Ideas from '../pages/Ideas'
import Layout from "../pages/Layout"
import NoPage from '../pages/NoPage'
import Projects from '../pages/Project'
import Services from '../pages/Services'
import Socials from '../pages/Socials'






export default function NavBar() {
    return (
        <div className='sticky w-full top-0 left-0 right-0 z-10 dark:shadow-white backdrop-blur-lg rounded-lg'>
            <div className='p-2 flex flex-row justify-between items-centercontent-center shadow-md min-w-full relative top-0'>
                <div className='flex items-center justify-start'>
                    <ToggleMenu />
                    <WebLogo />
                </div>
                <div className='basic-1/3'>
                    <ModeToggle />
                </div>
            </div>
        </div>

    )
}

export function ToggleMenu() {
    const side = "left";
    
    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="min-w-12">
                        <HamburgerMenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            Navigation Menu
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">   
                        <ToggleMenuPages />                     
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

function ToggleMenuPages(){
    const pages = [ 
            "Home",
            "About",
            "Contact",
            "Projects",
            "Ideas",
            "Services",
            "Socials",
    ];  
    return (
        <>
        {pages.map((page, index) => (
            <SheetClose key={index} asChild>
                <Link to={page}>
                    <Toggle variant="outline" aria-label="Toggle" className="w-full">
                        {page}
                    </Toggle>
                </Link>
            </SheetClose>
        ))}
        </>
    )
}


function WebLogo() {
    return (
        <>
            <Link to="/">
                <p className='font-serif text-xl'>
                    <span>palve</span>Vaishnav
                </p>
            </Link>
        </>
    )
}

export function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path='home' element={<Home />}></Route>
                        <Route path='projects' element={<Projects />}></Route>
                        <Route path='socials' element={<Socials />}></Route>
                        <Route path='about' element={<About />}></Route>
                        <Route path='contact' element={<Contact />}></Route>
                        <Route path='services' element={<Services />}></Route>
                        <Route path='ideas' element={<Ideas />}></Route>
                        <Route path='*' element={<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
"use client";

import { useState } from "react";   
import Link from "next/link";
import Image from "next/image";

type LinkModel = {
    name: string,
    id: string;
}

type MenuProps = {
    links: LinkModel[];
}

export default function MenuMobile({links}: MenuProps) {
    const [active, setActive] = useState(false);

    function openMenu() {
        setActive(true);
        document.body.classList.add("overflow-hidden");
    }

    function closeMenu() {
        setActive(false);
        document.body.classList.remove("overflow-hidden");
    }

    return(
        <div className="lg:hidden">
                <img
                src="/menu-hamburger.svg"
                width={25}
                height={25}
                alt="Open Menu"
                loading="eager"
                decoding="async"
                fetchPriority="low"
                className={active?"hidden":"cursor-pointer"}
                onClick={openMenu}
                />            
                <menu className={active?"absolute h-screen w-full top-0 left-0 justify-center items-center bg-transparent/80 lg:backdrop-blur-md flex flex-col  gap-5 ":"hidden"}>
                <div className="py-5 px-7 absolute top-0 left-0 flex justify-between w-full">
                    <Image src="/logo-icon.svg" alt="Logo" width={150} height={75} className="lg:hidden"></Image>  
                    
                    <img src="/close.svg" width={20} height={20} alt="Close Menu" loading="eager" decoding="async" fetchPriority="low" className="cursor-pointer" onClick={closeMenu}/>
                </div>
                    {links.map( 
                        (link) => 
                            <Link href={`/#${link.id}`} key={link.name}  className="text-white cursor-pointer" onClick={closeMenu}>{link.name}</Link>
                    )}
                    <Link href="/#contact" className="px-2.5 py-1.5 bg-[#DAA520] text-black font-bold text-center cursor-pointer" onClick={closeMenu}>
                        SOLICITAR ORÇAMENTO
                    </Link>
                </menu>
        </div>
    )   
}
"use client";

import Link from "next/link";

type MenuProps = {
    links: { name: string, id: string; }[];
};


export default function MenuDesktop({links}: MenuProps) { 

    const ListWidth = [
        {name:"About", value:60},
        {name:"Services", value:85},
        {name:"Projects", value:90},
        {name:"Partners", value:100},
        {name:"Contat", value:85},
    ]

    function travelTo(id:string) {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: "smooth",
        });
    };



    return(
        <div className="flex gap-10 justify-center items-center">
            <menu className="hidden lg:flex gap-10 items-center">
                {links.map( 
                    (link, index) => 
                        <li key={link.name} className="inline-block font-normal hover:font-bold transition hover:scale-105" style={{minWidth:`${ListWidth[index].value}px`}}>
                            <Link href={"/"} onClick={()=>travelTo(link.id)}>
                                {link.name}
                            </Link>
                        </li>
                )}  
            </menu>
            <Link href="/" onClick={()=>travelTo("contact")} className="transition hover:scale-105 px-2.5 py-1.5 bg-[#DAA520] text-black font-bold text-[14px]">
                    SOLICITAR ORÇAMENTO
            </Link>
        </div>
    );
}
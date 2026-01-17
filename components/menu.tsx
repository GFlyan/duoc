"use client";

import dynamic from "next/dynamic";

const links = [
    { name: "SOBRE", id: "about"},
    { name: "SERVIÇOS", id: "services"},
    { name: "PROJETOS", id: "projects"},
    { name: "PARCEIROS", id: "partners"},
    { name: "CONTATO", id: "contact"},
]

const MenuMobile = dynamic(() => import('./menuMobile'));
const MenuDesktop = dynamic(() => import('./menuDesktop'));

export default function Menu() {
    return (
    <>
            <div className="lg:hidden">
                <MenuMobile links={links}/>
            </div> 
            <div className="hidden lg:block">   
                <MenuDesktop links={links}/>   
            </div>     
    </>);
}
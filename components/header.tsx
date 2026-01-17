import dynamic from "next/dynamic";
import Image from "next/image";

const Menu = dynamic(() => import('./menu'), {loading: ()=>null});

export default function Header() {
    return(
        <header id="header" className="absolute z-30 top-0 w-full flex justify-between lg:bg-transparent/50 lg:backdrop-blur-md text-white items-center py-5 px-7 lg:px-10">
            <Image src="/logo-icon.svg" alt="Logo" width={150} height={75} className="lg:hidden"></Image>  
            <Image src="/logo-icon.svg" alt="Logo" width={150} height={50} className="hidden lg:block"></Image>            
            <Menu/>
        </header>
    )
}

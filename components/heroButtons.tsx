import dynamic from "next/dynamic"
import Link from "next/link";

const Quote = dynamic(()=> import("./quoteButton"), {loading:()=>null});

export default function HeroButtons() {
    return(
        <div className="flex mt-7 lg:mt-14 lg:flex-row-reverse lg:justify-start lg:absolute lg:left-10 gap-2 lg:gap-5">
            <Link href={"/projects"}>
                <button className="border border-[#DAA520] text-[#DAA520] font-bold text-[13px] lg:text-[21px] py-1 px-1.5 lg:px-8 lg:transition lg:hover:scale-105">
                    VER PROJETOS
                </button>
            </Link>
            <Quote/>
        </div>
    )
}
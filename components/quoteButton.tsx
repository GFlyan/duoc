"use client";

export default function QuoteButton() {
    
    function handleClick(id:string) {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return(
            <button onClick={()=>handleClick("contact")} className="bg-[#DAA520] font-bold text-[13px] lg:text-[21px] py-1 px-1.5 lg:px-8 lg:transition lg:hover:scale-105">
                SOLICITAR ORÇAMENTO
            </button>
    );
}
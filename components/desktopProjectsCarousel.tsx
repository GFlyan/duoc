"use client";

import CircleComponent from "@/components/circle";
import { DesktopProjectCard } from "./projectCard";
import { useState } from "react";

export default function Carousel() {

const ListCircles = [CircleComponent, CircleComponent];
    
const ListComponents = [
  {
    title:"Lorem Ipsum 1", 
    category: ["LOREM 1",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/slane.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 2", 
    category: ["LOREM 2",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/sla1ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 3", 
    category: ["LOREM 3",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/sla2ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 4", 
    category: ["LOREM 4",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/sla3ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 5", 
    category: ["LOREM 5",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/sla4ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 6", 
    category: ["LOREM 6",],
    localization:"Sobradinho, Brasília - DF",
    imageSrc: "/sla5ne.webp",
    imageAlt: "Slane Image"
  }]

  function mod(n:number , m: number) {
    return ((n % m) + m) % m;
  }

  const [leftHiddenPos, setLeftHiddenPos] = useState(mod(ListComponents.length-1, ListComponents.length));
  const [firstPos, setFirstPos] = useState(0);
  const [secondPos, setSecondPos] = useState(mod(firstPos+1, ListComponents.length));
  const [thirdPos, setThirdPos] = useState(mod(firstPos+2, ListComponents.length));
  const [righttHiddenPos, setRightHiddenPos] = useState(mod(firstPos+3, ListComponents.length));
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [active, setActive] = useState(false);

  function handleChangePrevious() {
    setActive(true);
    setLeftHiddenPos(mod(leftHiddenPos-3, ListComponents.length));
    setFirstPos(mod(firstPos-3,ListComponents.length));
    setSecondPos(mod(secondPos-4,ListComponents.length));
    setThirdPos(mod(thirdPos-4,ListComponents.length));
    setRightHiddenPos(mod(righttHiddenPos-4,ListComponents.length));
    setLeft(true);
    setTimeout(() =>{    
        setLeft(false)
        setSecondPos(mod(secondPos-3,ListComponents.length));
        setThirdPos(mod(thirdPos-3,ListComponents.length));
        setRightHiddenPos(mod(righttHiddenPos-3,ListComponents.length));
        setActive(false);
    }, 250);
  }

  function handleChangeNext() {
    setActive(true);
    setLeftHiddenPos(mod(leftHiddenPos+4, ListComponents.length));
    setFirstPos(mod(firstPos+4,ListComponents.length));
    setSecondPos(mod(secondPos+4,ListComponents.length));
    setThirdPos(mod(thirdPos+3,ListComponents.length));
    setRightHiddenPos(mod(righttHiddenPos+3,ListComponents.length));
    setRight(true);
    setTimeout(() =>{  
        setRight(false);
        setLeftHiddenPos(mod(leftHiddenPos+3, ListComponents.length));
        setFirstPos(mod(firstPos+3,ListComponents.length));
        setSecondPos(mod(secondPos+3,ListComponents.length));
        setActive(false);
    }, 250); 
  }

    return(
        <div className="relative min-h-[250px] w-full flex flex-col justify-center items-center">
           <div className="relative w-full flex gap-10 justify-center items-center">
                <button onClick={()=>{handleChangePrevious()}} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                 <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                <div className="relative flex gap-10 justify-center items-center max-w-[980px] min-w-[980px]">
                    <div className={right?"absolute transition duration-250 left-0 z-10":left? "hidden":"hidden"}>
                        <DesktopProjectCard 
                            title={ListComponents[leftHiddenPos].title} 
                            category={ListComponents[leftHiddenPos].category}
                            localization={ListComponents[leftHiddenPos].localization}
                            imageSrc={ListComponents[leftHiddenPos].imageSrc}
                            imageAlt={ListComponents[leftHiddenPos].imageAlt}
                        />
                    </div>

                    <div className={right?"absolute left-0 min-w-[300px] transition durantion-250 translate-x-[340px] z-20": left? "hidden": "min-w-[300px]"}>
                        <DesktopProjectCard 
                            title={ListComponents[firstPos].title} 
                            category={ListComponents[firstPos].category}
                            localization={ListComponents[firstPos].localization}
                            imageSrc={ListComponents[firstPos].imageSrc}
                            imageAlt={ListComponents[firstPos].imageAlt}
                        />
                    </div>
                    <div className={right?"absolute left-0 translate-x-[680px] min-w-[300px] transition durantion-250 z-30":left?"absolute right-0 -translate-x-[680px] transition durantion-250 z-30":"min-w-[300px]"}>
                        <DesktopProjectCard 
                            title={ListComponents[secondPos].title} 
                            category={ListComponents[secondPos].category}
                            localization={ListComponents[secondPos].localization}
                            imageSrc={ListComponents[secondPos].imageSrc}
                            imageAlt={ListComponents[secondPos].imageAlt}
                        />
                    </div>
                    <div className={right?"hidden":left?"absolute right-0 min-w-[300px] transition durantion-250 -translate-x-[340px] z-20":"min-w-[300px]"}>
                        <DesktopProjectCard 
                            title={ListComponents[thirdPos].title} 
                            category={ListComponents[thirdPos].category}
                            localization={ListComponents[thirdPos].localization}
                            imageSrc={ListComponents[thirdPos].imageSrc}
                            imageAlt={ListComponents[thirdPos].imageAlt}
                        />
                    </div>   
                    <div className={right?"hidden":left?"absolute transition duration-250 right-0 z-10":"hidden"}>
                        <DesktopProjectCard 
                            title={ListComponents[righttHiddenPos].title} 
                            category={ListComponents[righttHiddenPos].category}
                            localization={ListComponents[righttHiddenPos].localization}
                            imageSrc={ListComponents[righttHiddenPos].imageSrc}
                            imageAlt={ListComponents[righttHiddenPos].imageAlt}
                        />
                    </div> 
                </div>
                <button onClick={()=>handleChangeNext()} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
                <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
           </div>
           <div className="absolute bottom-[0px] flex gap-2 mt-5 z-40">
                {ListCircles.map((Circle, index)=>(
                    <Circle key={index+1} position={index+1} actualPosition={(thirdPos+1)/3}/>
                ))}            
           </div>
        </div>
    );
}
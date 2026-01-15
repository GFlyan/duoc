"use client";

import CircleComponent from "@/components/circle";
import { ServiceCard } from "@/components/serviceCard";
import { useState } from "react";

export default function Carousel() {

const ListCircles = [CircleComponent, CircleComponent];
    
const ListComponents = [
  {
    title:"Lorem Ipsum 1", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/slane.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 2", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/sla1ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 3", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/sla2ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 4", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/sla3ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 5", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/sla4ne.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Lorem Ipsum 6", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/sla5ne.webp",
    imageAlt: "Slane Image"
  },
    
  ]

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
        <div className="relative min-h-[475px] w-full flex flex-col justify-center items-center">
           <div className="relative w-full flex gap-10 justify-center items-center">
                <button onClick={()=>{handleChangePrevious()}} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                 <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                <div className="relative flex gap-10 justify-center items-center max-w-[980px] min-w-[980px]">
                    <div className={right?"absolute transition duration-250 left-0 z-10":left? "hidden":"hidden"}>
                        <ServiceCard 
                            title={ListComponents[leftHiddenPos].title} 
                            text={ListComponents[leftHiddenPos].text} 
                            item1={ListComponents[leftHiddenPos].item1}
                            item2={ListComponents[leftHiddenPos].item2}
                            item3={ListComponents[leftHiddenPos].item3}
                            imageSrc={ListComponents[leftHiddenPos].imageSrc}
                            imageAlt={ListComponents[leftHiddenPos].imageAlt}
                        />
                    </div>

                    <div className={right?"absolute left-0 min-w-[300px] transition durantion-250 translate-x-[340px] z-20": left? "hidden": "min-w-[300px]"}>
                        <ServiceCard 
                            title={ListComponents[firstPos].title} 
                            text={ListComponents[firstPos].text} 
                            item1={ListComponents[firstPos].item1}
                            item2={ListComponents[firstPos].item2}
                            item3={ListComponents[firstPos].item3}
                            imageSrc={ListComponents[firstPos].imageSrc}
                            imageAlt={ListComponents[firstPos].imageAlt}
                        />
                    </div>
                    <div className={right?"absolute left-0 translate-x-[680px] min-w-[300px] transition durantion-250 z-30":left?"absolute right-0 -translate-x-[680px] transition durantion-250 z-30":"min-w-[300px]"}>
                        <ServiceCard 
                            title={ListComponents[secondPos].title} 
                            text={ListComponents[secondPos].text} 
                            item1={ListComponents[secondPos].item1}
                            item2={ListComponents[secondPos].item2}
                            item3={ListComponents[secondPos].item3}
                            imageSrc={ListComponents[secondPos].imageSrc}
                            imageAlt={ListComponents[secondPos].imageAlt}
                        />
                    </div>
                    <div className={right?"hidden":left?"absolute right-0 min-w-[300px] transition durantion-250 -translate-x-[340px] z-20":"min-w-[300px]"}>
                        <ServiceCard 
                            title={ListComponents[thirdPos].title} 
                            text={ListComponents[thirdPos].text} 
                            item1={ListComponents[thirdPos].item1}
                            item2={ListComponents[thirdPos].item2}
                            item3={ListComponents[thirdPos].item3}
                            imageSrc={ListComponents[thirdPos].imageSrc}
                            imageAlt={ListComponents[thirdPos].imageAlt}
                        />
                    </div>   
                    <div className={right?"hidden":left?"absolute transition duration-250 right-0 z-10":"hidden"}>
                        <ServiceCard 
                            title={ListComponents[righttHiddenPos].title} 
                            text={ListComponents[righttHiddenPos].text} 
                            item1={ListComponents[righttHiddenPos].item1}
                            item2={ListComponents[righttHiddenPos].item2}
                            item3={ListComponents[righttHiddenPos].item3}
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
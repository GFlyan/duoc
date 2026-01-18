"use client";

import {PrimaryServiceCard, SecondaryServiceCard} from "@/components/serviceCard";
import { useEffect, useState } from "react";
import CircleComponent from "@/components/circle";

export default function Carousel() {
const ListCircles = [CircleComponent, CircleComponent, CircleComponent, CircleComponent]

const ListComponents = [
  {
    title:"Slane", 
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim?",
    item1: "Lorem ipsum dolor",
    item2: "Lorem ipsum dolor",
    item3: "Lorem ipsum dolor",
    imageSrc: "/slane.webp",
    imageAlt: "Slane Image"
  },
    {
    title:"Construção Civíl", 
    text: "Projetos residenciais e comerciais com excelência técnica, desde a fundação até o acabamento final.",
    item1: "Projetos Personalizados",
    item2: "Gestão de Obras",
    item3: "Acabamentos Premium",
    imageSrc: "/construcao-civil.webp",
    imageAlt: "Construcao Civíl Image"
  },
  {
    title:"Instalações Elétricas e de Dados", 
    text: "Infraestrutura elétrica e de telecomunicações moderna, segura e eficiente para sua edificação.",
    item1: "Projetos Elétricos",
    item2: "Cabeamento Estruturado",
    item3: "Eficiência Energética",
    imageSrc: "/instalacoes-eletricas-e-dados.webp",
    imageAlt: "Instalações Elétricas e de Dados Image"
  },
  {
    title:"Automação Residencial e Empresarial", 
    text: "Transforme seu espaço em um ambiente inteligente com tecnologia de ponta e conforto automatizado.",
    item1: "Smart Home",
    item2: "Iluminação Inteligente",
    item3: "Climatização Automatizada",
    imageSrc: "/automacao-residencial-empresarial.webp",
    imageAlt: "Automação Residencial e Empresarial Image"
  },

]
  const [latePos, setLatePos] = useState(0);
  const [mainPos, setMainPos] = useState(1);
  const [nextPos, setNextPos] = useState(2);
  const [hiddenPos, setHiddenPos] = useState(3);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    if (mainPos === 0) {
      setLatePos(ListComponents.length - 1);
      setNextPos(mainPos + 1);
    } else if(mainPos === ListComponents.length - 1) {
      setLatePos(mainPos - 1);
      setNextPos(0);
    } else {
      setLatePos(mainPos - 1);
      setNextPos(mainPos + 1);
    }
    setHiddenPos((mainPos + 2) % 4);
  }, [mainPos]);

  function handleChangePrevious() {
    setRight(true);
    setTimeout(() =>{
      if (mainPos === 0) {
      setMainPos(ListComponents.length - 1);
      } else {
        setMainPos(mainPos - 1);
      }
      setRight(false); 
    }, 350);
  }

  function handleChangeNext() {
    setLeft(true);
    setTimeout(() =>{    
        if (mainPos === ListComponents.length - 1) {
        setMainPos(0);
        } else {
          setMainPos(mainPos + 1);
        }
        setLeft(false);
    }, 350);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="relative flex justify-center items-center gap-5">
          <button onClick={() => handleChangePrevious()} className={(left|| right)?"hidden" : "absolute left-[100px] z-40 h-[175px] w-[70px] cursor-pointer"}>
            &#8203;
          </button> 
          <div className={right? "relative left-[100px] z-20 transition duration-350 translate-x-[82.5px] scale-x-[1.15] scale-y-[1.28]" : left ? "relative left-[100px] z-0 transition duration-350 translate-x-14 blur-[1.25px]" : "relative left-[100px] z-10 blur-[1.25px]"}>
            <SecondaryServiceCard
              title={ListComponents[latePos].title} 
              text={ListComponents[latePos].text} 
              item1={ListComponents[latePos].item1}
              item2={ListComponents[latePos].item2}
              item3={ListComponents[latePos].item3}
              imageSrc={ListComponents[latePos].imageSrc}
              imageAlt={ListComponents[latePos].imageAlt}
              />
          </div>
          <div className={right ? "relative z-10 transition duration-350 translate-x-[82.5px] blur-[1.25px] scale-[0.79]" : left ? "relative z-20 transition duration-350 -translate-x-[82.5px] blur-[1.5px] scale-[0.79]" : "relative z-20 flex"}>
            <PrimaryServiceCard
              title={ListComponents[mainPos].title} 
              text={ListComponents[mainPos].text} 
              item1={ListComponents[mainPos].item1}
              item2={ListComponents[mainPos].item2}
              item3={ListComponents[mainPos].item3}     
              imageSrc={ListComponents[mainPos].imageSrc}
              imageAlt={ListComponents[mainPos].imageAlt}/> 
          </div>
          <div className={right? "relative right-[100px] z-0 transition duration-350 -translate-x-[82.5px] blur-[1.25px]" : left ? "relative right-[100px] z-20 transition duration-350 -translate-x-[82.5px] scale-x-[1.15] scale-y-[1.28]" : "relative right-[100px] z-10 blur-[1.25px]"}>
            <SecondaryServiceCard
            title={ListComponents[nextPos].title} 
            text={ListComponents[nextPos].text} 
            item1={ListComponents[nextPos].item1}
            item2={ListComponents[nextPos].item2}
            item3={ListComponents[nextPos].item3}
            imageSrc={ListComponents[nextPos].imageSrc}
            imageAlt={ListComponents[nextPos].imageAlt}/>
          </div>
          <div className={right?"absolute z-0 transition -translate-x-[82.5px] blur-[1.25px]": left?"absolute z-0 transition translate-x-[82.5px] blur-[1.25px]": "hidden"}>
            <SecondaryServiceCard 
              title={ListComponents[hiddenPos].title} 
              text={ListComponents[hiddenPos].text} 
              item1={ListComponents[hiddenPos].item1}
              item2={ListComponents[hiddenPos].item2}
              item3={ListComponents[hiddenPos].item3}
              imageSrc={ListComponents[hiddenPos].imageSrc}
              imageAlt={ListComponents[hiddenPos].imageAlt}/>
          </div>
          <button onClick={() => handleChangeNext()} className={(left|| right)?"hidden" : "absolute right-[100px] z-40 h-[175px] w-[70px] cursor-pointer"}>
            &#8203;
          </button>   
      </div>
      <div className="flex gap-2">
        {ListCircles.map((Circle,index)=>(
          <Circle key={index} position={index} actualPosition={mainPos}/>
        ))}
      </div>
    </div>
  );
}

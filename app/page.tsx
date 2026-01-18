
import Image from "next/image";
import Link from "next/link";
import HeroButtons from "@/components/heroButtons";
import CardWho from "@/components/card-who";
import ServicesCarousel from "@/components/servicesCarousel";
import ProjectsCarousel from "@/components/projectsCarousel";

export default function Home() {

    const acumulator = [1,2,3,4];
    const cards = [
        {title: "Localização", subtitle: "Brasília, Distrito Federal"},
        {title: "Telefone", subtitle: "(61) 99999-9999"},
        {title: "WhatsApp", subtitle: "(61) 99999-9999"},
        {title: "E-mail", subtitle: "contato@duoc.com.br"},
    ]

    return(
            <main>
                {/* Hero */}
                <section className="relative w-full h-[360px] lg:h-[650px]">
                    <Image src="/hero-desktop.webp" alt="Hero Image" fill priority fetchPriority="high" className="" sizes="100vw"/>
                    <div className="absolute top-[125px] lg:top-[200px] w-full px-7 lg:px-10">
                        <h1 className="text-white text-[32px] lg:text-[75px] font-bold w-[320px] lg:w-[762px] leading-[1]">Inovação, Técnica e <span className="text-[#DAA520] text-[32px] lg:text-[75px] font-bold ">Sensibilidade</span></h1>
                        <p className="text-[#D8D8D8] text-[12px] lg:text-[23px] w-[256px] lg:w-[700px] text-justify mt-2">
                            Transformamos espaços com soluções inteligentes, sustentáveis e humanas. <span className="mt-2 block lg:inline">Unimos engenharia e arquitetura com o cuidado que só uma família pode oferecer.</span>
                        </p>
                        <HeroButtons/>
                    </div>
                </section>

                {/*Quem Somos*/}
                <section id="about" className="bg-[#07090A] w-full py-5 lg:py-10 pb-8">
                    <h1 className="text-[#DAA520] text-[17px] lg:text-[22px] text-center lg:text-start font-medium px-7 lg:px-10">QUEM SOMOS</h1>
                    <div className="flex flex-col lg:flex-row justify-between pt-4 lg:pt-0">
                        <section className="flex gap-7 lg:gap-5 lg:flex-col px-7 lg:px-10">
                            <div className="lg:relative">
                                <h1 className="text-white text-[26px] lg:text-[50px] font-bold">DUOC</h1>
                                <div className="relative lg:static flex flex-col lg:flex-col-reverse">
                                    <img src="/line.svg" alt="Line Icon" height={10} width={100 } loading="eager" decoding="async" fetchPriority="low" className="lg:hidden absolute bottom-[11.5px]"/>
                                    <img src="/line.svg" alt="Line Icon" height={10} width={160} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block lg:mt-7"/>
                                    <h2 className="text-[#DAA520] text-[6.23px] lg:text-[30px] font-bold lg:absolute lg:top-[58px]">Arquitetura e Engenharia</h2>
                                </div>
                            </div>
                            <p className="lg:hidden text-[#D8D8D8] text-[10px] w-[265px] text-justify">
                                Nascendo do lar para o mundo, unindo arquitetura, engenharia e automação com cuidado, confiança e inovação.
                            </p>
                            <p className="hidden lg:block text-[#D8D8D8] text-justify w-[600px] my-5">
                                A DUOC nasce do lar para o mundo, unindo engenharia e arquitetura com o cuidado e a confiança que só uma família pode oferecer.
                                <br />
                                <br />
                                Atuamos nas áreas de Arquitetura, Engenharia e Automação Residencial e Empresarial, oferecendo soluções que unem técnica, inovação e sensibilidade em cada projeto. Nosso propósito é transformar espaços com soluções inteligentes, sustentáveis e humanas, criando ambientes que acolhem, funcionam e inspiram.                        
                            </p>
                            <Link href={"/about"} className="hidden bg-[#DAA520] font-bold text-[17px] py-1 w-[200px] transition hover:scale-105 lg:block text-center">
                                    CONHEÇA MAIS
                            </Link>
                        </section>

                        <div className="flex lg:flex-col gap-5 lg:gap-10 pt-6 pl-7 lg:px-10 lg:pt-0 overflow-auto scrollbar-hide">
                            <div className="flex gap-5 lg:gap-10">
                                <CardWho title="Confiança" text="Honramos cada etapa do processo com seriedade, ética e dedicação." srcImage="/shield.svg" altImage="Confidence Icon" heightImageMobile={15} widthImageMobile={15} heightImageDesktop={20} widthImageDesktop={20}/>
                                <CardWho title="Inovação" text="Incorporamos o que há de mais moderno em automação e tecnologia." srcImage="/light-on.svg" altImage="Innovation Icon" heightImageMobile={20} widthImageMobile={20} heightImageDesktop={25} widthImageDesktop={25}/>
                            </div>
                            <div className="flex gap-5 lg:gap-10">
                                <CardWho title="Cuidado" text="Cuidamos de cada projeto como quem cuida de casa." srcImage="/care.svg" altImage="Care Icon" heightImageMobile={20} widthImageMobile={20} heightImageDesktop={25} widthImageDesktop={25}/>
                                <CardWho title="Família" text="Nossa raiz afetiva fortalece cada relação construída." srcImage="/family.svg" altImage="Family Icon" heightImageMobile={25} widthImageMobile={25} heightImageDesktop={30} widthImageDesktop={30}/>
                                <div className="lg:hidden w-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden w-full flex justify-center pt-8">
                        <Link href={"/about"} className="border border-[#DAA520] text-[#DAA520] font-bold text-[13px] py-1 px-10 text-center">
                                CONHEÇA MAIS
                        </Link>
                    </div>
                </section>

                {/*Nossos Serviços*/}
                <section id="services" className="bg-[#0B0E10] min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden py-5 lg:py-10">
                    <h1 className="text-[#DAA520] text-[17px] lg:text-[22px] text-center lg:text-start font-medium px-7 lg:px-10">NOSSOS SERVIÇOS</h1>
                    <h2 className="text-white text-center font-bold mt-2 lg:text-[30px]">
                        Soluções Completas em
                        <br /> 
                        <span className="text-[#DAA520]">Engenharia e Automação</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100 } loading="eager" decoding="async" fetchPriority="low" className="lg:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>

                    <ServicesCarousel/>
                    <Link href={"/services"} className="hidden lg:block text-[#0B0E10] bg-[#DAA520] mt-10 font-bold text-[17px] py-1 w-[300px] transition hover:scale-105 text-center">
                            CONHEÇA NOSSOS SERVIÇOS
                    </Link>
                </section>

                {/*Portfólio*/}
                <section id="projects" className="bg-[#06090B] min-h-[400px] w-full px-7 lg:px-10 py-5 lg:py-10 flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[17px] lg:text-[22px] text-center lg:text-start font-medium px-7 lg:px-10">PORTFÓLIO </h1>
                    <h2 className="text-white text-center font-bold mt-2 lg:text-[30px]">
                        Projetos <span className="text-[#DAA520]">Recentes</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100 } loading="eager" decoding="async" fetchPriority="low" className="lg:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                    <ProjectsCarousel/>
                    <Link href={"/projects"} className="hidden lg:block text-[#0B0E10] bg-[#DAA520] mt-10 font-bold text-[17px] py-1 w-[300px] transition hover:scale-105 text-center">
                            VER PORTFÓLIO COMPLETO
                    </Link>
                </section>

                {/*Parceiros*/}
                <section id="partners" className="bg-[#0B0E10] min-h-[400px] w-full px-7 lg:px-10 py-5 lg:py-10 flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[17px] lg:text-[22px] text-center lg:text-start font-medium px-7 lg:px-10">PARCEIROS </h1>
                    <h2 className="text-white text-center font-bold mt-2 lg:text-[30px]">
                        Parcerias de <span className="text-[#DAA520]">Confiança</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100 } loading="eager" decoding="async" fetchPriority="low" className="lg:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                    <div className="flex flex-wrap gap-5 lg:gap-10 mt-5 justify-center items-center">
                        {acumulator.map((index)=>(
                            <div key={index} className="h-[60px] lg:h-[90px] w-[140px] lg:w-[200px] bg-[#D9D9D9]"/>
                        ))}
                    </div>
                    <p className="text-[#D8D8D8] text-[12px] lg:text-[16px] text-center mt-5 lg:mx-[250px]">Mantemos parcerias construídas com base na confiança, na transparência e no compromisso com a qualidade. Trabalhamos ao lado de profissionais e empresas que compartilham dos mesmos valores e da busca contínua por soluções inovadoras e eficientes.</p>
                </section>

                {/*Fale Conosco*/}
                <section id="contact" className="bg-[#010101] w-full px-7 lg:px-10 py-5 lg:py-10">
                    <h1 className="text-[#DAA520] text-[17px] lg:text-[22px] lg:text-start font-medium ">FALE CONCOSCO</h1>
                    <div className="lg:flex justify-between">
                        <div className="lg:max-w-[390px]">
                            <h2 className="text-white font-bold mt-2 lg:text-[30px]">
                                Pronto para  <span className="text-[#DAA520]">Transformar</span> <br className="hidden lg:block"/> seu Espaço
                            </h2>
                            <img src="/lastLine.svg" alt="Line Icon" height={5} width={205} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden"/>
                            <img src="/lastLine.svg" alt="Line Icon" height={10} width={180} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                            <p className="text-[#D8D8D8] text-[12px] lg:text-[16px] mt-2 lg:text-justify">Entre em contato conosco para uma consulta personalizada. Nossa equipe está pronta para entender suas necessidades e apresentar as melhores soluções.</p>
                            <div className=" flex flex-wrap justify-center lg:justify-start items-center lg:items-start lg:flex-col mt-5 gap-1 lg:gap-5">
                                {cards.map((card, index)=>(
                                    <article key={index} className="flex h-[50px] lg:h-auto w-[150px] lg:w-auto">
                                        <div className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] bg-[#DAA520] rounded-md"/>
                                        <div className="text-white ml-2">
                                            <h1 className="text-[10px] lg:text-[16px] font-bold">{card.title}</h1>
                                            <h2 className="text-[9px] lg:text-[15px]">{card.subtitle}</h2>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                        <form action="/" method="POST" className="px-7 pb-7 pt-3.5 lg:py-5 border border-[#1F1F1F] bg-[#0E1011] flex flex-col gap-3 rounded-lg lg:min-w-[500px] lg:justify-center">
                            <div>
                                <label htmlFor="name" className="text-[#D8D8D8] font-bold text-[9.5px] lg:text-[14px]">Nome Completo</label>
                                <input type="text" id="name" autoComplete="name" inputMode="text" placeholder="Seu nome" className="w-full border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] mt-1.5 pl-2 text-[9.5px] lg:text-[14px] h-[30px] lg:h-[45px] focus:outline-none"/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-[#D8D8D8] font-bold text-[9.5px] lg:text-[14px]">E-mail</label>
                                    <input type="email" id="email" autoComplete="email" inputMode="email" placeholder="seu@email.com" className="border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] lg:text-[14px] h-[30px] lg:h-[45px] focus:outline-none"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-[#D8D8D8] font-bold text-[9.5px] lg:text-[14px]">Telefone</label>
                                    <input type="tel" id="phone" autoComplete="tel" inputMode="tel" placeholder="(61) 99999-9999" className="border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] lg:text-[14px] h-[30px] lg:h-[45px] focus:outline-none"/>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="select" className="text-[#D8D8D8] font-bold text-[9.5px] lg:text-[14px]">Assunto</label>
                                <select name="select" id="select" defaultValue="duvidas" className="cursor-pointer appearance-none border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] lg:text-[14px] h-[30px] lg:h-[45px] focus:outline-none">
                                    <option value="duvidas">Dúvidas</option>
                                    <option value="orcamento" >Orçamento</option>
                                </select>
                                <img src="invertedTriangle.svg" alt="Select Icon" width={7.5}  height={7.5} loading="eager" decoding="async" fetchPriority="low" className="absolute right-[10px] bottom-[11px] lg:hidden"/>
                                <img src="invertedTriangle.svg" alt="Select Icon" width={10}  height={10} loading="eager" decoding="async" fetchPriority="low" className="absolute right-[15px] bottom-[15px] hidden lg:block"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-[#D8D8D8] font-bold text-[9.5px] lg:text-[14px]">Mensagem</label>
                                <textarea name="message" id="message" placeholder="Conte-nos sobre seu projeto:" className="w-full border border-[#464646] bg-[#0E1011] rounded-md resize-none text-[#D8D8D8] p-2 mt-1.5 text-[9.5px] lg:text-[14px] h-[100px] lg:h-[125px] focus:outline-none scrollbar-thin"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#DAA520] py-1 cursor-pointer text-[12px] lg:text-[17px] text-[#0E1011] font-bold" > 
                                ENVIAR MENSAGEM 
                            </button>
                            <p className="text-center text-[7px] lg:text-[10px] text-[#D8D8D8]/55">Respondemos em até 24 horas úteis.</p>
                        </form>
                    </div>
                </section>
            </main>
    );
}
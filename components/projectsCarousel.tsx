import dynamic from "next/dynamic";

const DesktopCarousel = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});
const MobileCarousel = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});


export default function ProjectsCarousel() {
    return(
        <>
            <div className="lg:hidden">
                <MobileCarousel/>
            </div>
            <div className="hidden lg:block">
                <DesktopCarousel/>
            </div>
        </>
    );
}
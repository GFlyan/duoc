import dynamic from "next/dynamic";

const DesktopCarousel = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});

export default function ProjectsCarousel() {
    return(
        <>
            <div className="hidden lg:block">
                <DesktopCarousel/>
            </div>
        </>
    );
}
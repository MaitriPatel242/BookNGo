import CardSlider from "./CardSlider";
import Sidebar from "./Sidebar";
export default function Tour() {
    return (
        <div>
            <section className="relative bg-black lg:h-[380px]"> 
                <img src="/slider-1.jpg" alt="" className="absolute h-full w-full object-cover"/>
                <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
                   <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explore The World</span>
                   <p className=" text-white text-center text-2xl my-2 ">People don't take,Trips take people</p>
                </div>
            </section>
            <CardSlider/>
            <section>
                <Sidebar/>
                <div></div>
            </section>
        </div>
    );
}


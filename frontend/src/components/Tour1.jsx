import { BsSortAlphaDown } from "react-icons/bs";
import CardSlider from "./CardSlider";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Tour() {
    const [sortAsc,setSortAsc] = useState(true)
    const [sortCriterion,setSortCriterion] = useState('name')
    const [currentPage,setcurrentPage] = useState(0);
    
    const handleSortChange = (event) =>{
        setSortCriterion(event.target.value)
        setSortAsc(true);
    }

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
            <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
                <Sidebar/>

                <div className="lg:2/3">
                    <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
                        <span className="flex gap-2">
                            <strong>{tourData.length}</strong> Tours
                        </span>
                        <span className="flex gap-2">
                            <span className="flex gap-2 items-center">
                                Sort By <BsSortAlphaDown className="cursor-pointer" onClick={()=>setSortAsc(!sortAsc)}/>
                            </span>
                            <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
                                <option value="">Title</option>
                                <option value="">Price</option>
                                <option value="">Rating</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div>
                    {currentPage.map((item,index)=>(
                        <ToursCard key={index} image={item.image} name={item.name} rating={item.rating} price={item.price}/>
                    ))}
                </div>
            </section>
        </div>
    );
}


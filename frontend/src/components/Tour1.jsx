import { BsSortAlphaDown } from "react-icons/bs";
import CardSlider from "./CardSlider";
import Sidebar from "./Sidebar";
import Rating from "./Rating";
import { useState } from "react";
import { CiCamera, CiHeart } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdArrowRightAlt, MdLocationPin, MdPeopleOutline } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";
import { WiTime3 } from "react-icons/wi";
import ReactPaginate from 'react-paginate';
import { Tours } from "./Tour"



export default function Tour1() {
    const [sortAsc, setSortAsc] = useState(true)
    const [sortCriterion, setSortCriterion] = useState('name')
    const [currentPage, setcurrentPage] = useState(0);
    const itemsPerPage = 6;

    const tourData = [
        {
            image: "/tour-8-500x360.jpg",
            name: "Discovery Island Kayak Tour",
            rating: "4.5",
            price: '109',
        },
        {
            image: "/tour-6-500x360.jpg",
            name: "Beautiful Floating Villa",
            rating: "4.5",
            price: '116'
        },
        {
            image: "/tour-2-500x360.jpg",
            name: "Yucatán Peninsula & Caribbean",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-4-500x360.jpg",
            name: "Man Standing on a Rock",
            rating: "4.5",
            price: '116'
        },
        {
            image: "/tour-5-500x360.jpg",
            name: "Cottages In The Middle Of Beach",
            rating: "4.5",
            price: '129'
        },
        {
            image: "/tour-10-500x360.jpg",
            name: "North Island Adventure Tour",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-9-500x360.jpg",
            name: "Java & Bali One Life Adventures",
            rating: "4",
            price: '129'
        },
        {
            image: "/tour-1-500x360.jpg",
            name: "Boathouse Neughborhood",
            rating: "5",
            price: '129'
        },
        {
            image: "/tour-12-500x360.jpg",
            name: "Walking The Amalfi Coast",
            rating: "4.5",
            price: '129'
        },
    ];

    const handleSortChange = (event) => {
        setSortCriterion(event.target.value)
        setSortAsc(true);
    }

    const sortData = (data) => {
        return data.sort((a, b) => {
            if (sortCriterion === 'name') {
                return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (sortCriterion === 'price') {
                return sortAsc ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price);
            } else if (sortCriterion === 'rating') {
                return sortAsc ? parseFloat(a.rating) - parseFloat(b.rating) : parseFloat(b.rating) - parseFloat(a.rating);
            }
            return 0;
        });
    }

    const sortedData = sortData([...tourData]);
    const offset = currentPage * itemsPerPage;
    const currentPageData = sortedData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(tourData.length / itemsPerPage);

    // const ToursCard = ({ image, name, rating, price }) => {
    //     return (
    //         <div>
    //             <div className="relative overflow-hidden rounded-t-lg">
    //                 <img src={image} alt="" className="rounded-t-lg hoverImg h-[360px]" />
    //                 <div className="absolute flex justify-between top-4 left-4 right-4 ">
    //                     <p className="capitalize bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">
    //                         Featured
    //                     </p>
    //                     <button className="bg-[#00000066] p-1 rounded-md">
    //                         <CiHeart className="text-white text-xl" />
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="border border-[#ebe6de] rounded-b-lg relative">
    //                 <div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]">
    //                     <div className="px-6">
    //                         <div className="flex items-center gap-4 justify-between relative">
    //                             <Rating rating={rating} />
    //                             <span className="flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg">
    //                                 <div className="relative">
    //                                     <CiCamera size={24} />
    //                                     <button className="bg-green text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">5</button>
    //                                 </div>
    //                                 <IoVideocamOutline size={24} />
    //                             </span>
    //                         </div>
    //                         <h4 className="text-xl font-semibold py-2 hover:text-green">
    //                             {name}
    //                         </h4>
    //                         <span className="flex items-center gap-4 ">
    //                             <MdLocationPin className="text-green text-xl" />
    //                             <p className="text-[#757783] text-sm">
    //                                 Main Street, Brooklyn, NY.
    //                             </p>
    //                         </span>
    //                         <span className="text-[#757783] flex py-4 gap-2">
    //                             <LiaDollarSignSolid className="text-green text-xl" /> From
    //                             <p className="text-orange">${price}.00</p>
    //                         </span>
    //                         <div className="flex justify-between border-t py-2">
    //                             <div className="flex items-center gap-4">
    //                                 <span className="flex items-center gap-1">
    //                                     <WiTime3 className="text-green" /> 10 days
    //                                 </span>
    //                                 <span className="flex items-center gap-1">
    //                                     <MdPeopleOutline className="text-green" /> 50
    //                                 </span>
    //                             </div>
    //                             <a href="#" className="flex items-center gap-2 text-sm mt-2"> Explore <MdArrowRightAlt /></a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    const handlePageClick = (data) => { setcurrentPage(data.selected); };

    return (
        <div>
            <section className="relative bg-black lg:h-[380px]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
                <img src="/slider-1.jpg" alt="" className="absolute h-full w-full object-cover" />
                <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
                    <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explore The World</span>
                    <p className=" text-white text-center text-2xl my-2 ">People don't take,Trips take people</p>
                </div>
            </section>
            <CardSlider />
            <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
                <Sidebar />

                <div className="lg:2/3">
                    <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
                        <span className="flex gap-2">
                            <strong>{tourData.length}</strong> Tours
                        </span>
                        <span className="flex gap-2">
                            <span className="flex gap-2 items-center">
                                Sort By <BsSortAlphaDown className="cursor-pointer" onClick={() => setSortAsc(!sortAsc)} />
                            </span>
                            <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
                                <option value="name">Title</option>
                                <option value="price">Price</option>
                                <option value="rating">Rating</option>
                            </select>

                        </span>
                    </div>

                    <div className="grid lg:grid-col-2 grid-cols-2 gap-4">
                        {currentPageData?.map((item, index) => (
                            <Tours key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} />
                        ))}
                    </div>
                    <ReactPaginate
                        previousClassName="hidden"
                        nextLabel={"Next >>"}
                        nextClassName="border-2 rounded-[4px] px-4 h-10 flex items-center hover:border-green"
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="flex items-center gap-3 pt-8"
                        pageLinkClassName="h-10 flex items-center px-4 rounded-[4px] border-2 hover:border-green"
                        activeLinkClassName="border-2 border-green rounded-[4px]"
                    />
                </div>
            </section>
        </div>
    );
}


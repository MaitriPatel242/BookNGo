import {MdOutlineParagliding,MdSearch} from "react-icons/md";
import { FaPeopleCarry, FaUsers } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai"
import { useState } from "react";
import ReactSlider from 'react-slider'
const cardData =[
{
image: "/tour-11.jpg",
rating: "4",
price: "319",
title: "Rainbow Mountain Red Valley",
},
{
image: "/tour-12.jpg",
rating: "4.5",
price: "129",
title: "Walking the Amalfi Coast",
},
{
image: "/tour-8-500x360.jpg",
rating: "5",
price: "129",
title: "Discovery Island Kayak Tour",
},
];

export default function Sidebar(){
    const [value,setValue]=useState([109,619])

    return(
        <div className="flex flex-col gap-8 lg:w-1/3">
            <div className="p-4 w-full bg-white shadow-lg rounded-lg">
                <div className="mb-4 flex items-start border-b py-4">
                    <MdOutlineParagliding className="text-green text-5xl mr-2"/>
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Destinations</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Locations</option>
                            <option value="">Location 1</option>
                            <option value="">Location 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaPeopleCarry className="text-green text-5xl mr-2"/>
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Activity</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Booking Type</option>
                            <option value="">Type 1</option>
                            <option value="">Type 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <AiOutlineCalendar className="text-green text-5xl mr-2"/>
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Date From</h3>
                        <input type="date" className="w-full rounded"/>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaUsers className="text-green text-5xl mr-2"/>
                    <div className="w-full"> 
                        <h3 className="font-semibold mb-2">Guests</h3>
                        <input type="number" className="w-full rounded" defaultValue='0'/>
                    </div>
                </div>
                <div className="mb-4 flex items-start border-b py-4">
                    <div className="w-full"> 
                        <h3 className="font-semibold mb-2">Price</h3>
                        <div className="flex justify-between mb-3">
                            <div className="bg-blue-500 text-white px-2 rounded">${values[0]}</div>
                            <div className="bg-blue-500 text-white px-2 rounded">${values[1]}</div>
                        </div>
                      <ReactSlider className="horizontal-slider" thumbClassName="thumb" trackClassName="track" min={109} max={619} value={values} onChange={(value)=>{setValue(value)}} 
                        ariaLabel={["Lower thumb","Upper thumb"]} 
                        ariaValuetext={(state)=>`Thumb value ${state.valueNow}`}
                        renderTrack={(props,state)=>{
                            const {index}=state;
                            const trackStyle=index === 1 ? {backgroundColor:'#007bff'}: {}
                            return(
                                <div {...props} style={{...props.style,...trackStyle}}/>
                            )
                        }}/>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">
                        Languages
                    </h3>
                    <div className="flex flex-col">
                        {["English","French","German","Japanese","Thailand"].map((language)=>(
                             <label key={language} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-green"/>
                                <span  className="ml-2">{language}</span>
                             </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">Ammenities</h3>
                    <div className="flex flex-col">
                        {[
                            "Accepts Credit Cards",
                            "Car Parking",
                            "Free Coupons",
                            "Laundry Service",
                            "Outdoor Seating",
                            "Reservations",
                            "Restaurant",
                            "Smoking Allowed",
                            "Mireless Internet",
                        ].map((amenity)=>(
                            <label key={amenity} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-green"/>
                                <span  className="ml-2">{amenity}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <button className="w-full bg-green text-white rounded-lg h-16 my-4 flex justify-center items-center font-bold gap-2 text-center">
                <MdSearch/>Search
                </button>
            </div>
        </div>
    )
}
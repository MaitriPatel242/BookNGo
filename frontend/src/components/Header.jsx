import { useState } from "react";
import { CiSearch } from "react-icons/ci"
import { BsPersonCircle } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import { HiMenuAlt3 } from "react-icons/hi"

export default function Header() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown)
    }
    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
            <div className="conatiner mx-auto lg:px-3 w-full">
                <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-center items-center gap-16">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-2">
                            <img src="/logo.png" alt="" className="w-36" />
                        </div>
                    </div>
                    <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                        <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-green">Home</a>
                        <a href="#tours" className="leading-normal no-underline text-white text-lg hover:text-green">Tours</a>
                        <a href="#destination" className="leading-normal no-underline text-white text-lg hover:text-green">Destination</a>
                        <a href="#news" className="leading-normal no-underline text-white text-lg hover:text-green">News</a>
                        <a href="#page" className="leading-normal no-underline text-white text-lg hover:text-green">Pages</a>
                        <a href="#contact" className="leading-normal no-underline text-white text-lg hover:text-green">Contact</a>
                    </ul>
                    <div className="flex gap-4 max-lg:hidden w-40 justify-center">
                        <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
                            <CiSearch size={32} />
                        </button>
                        <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-green hover:text-white">
                            <BsPersonCircle size={24} />
                        </button>
                    </div>
                    {dropdown ? (
                        <div className="lg:hidden text-2xl cursor-pointer text-black" onClick={showDropdown}>
                            <MdClose />
                        </div>
                    ) : (
                        <div className="lg:hidden text-2xl cursor-pointer text-black" onClick={showDropdown}>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className="lg:hidden w-full fixed top-24 bg-white translate-all">
                        <div className="w-full flex flex-col items-baseline gap-4">
                            <ul className="w-full flex flex-col justify-center">
                                <a href="#home" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">Home</a>
                                <a href="#tours" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">Tours</a>
                                <a href="#destination" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">Destination</a>
                                <a href="#news" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">News</a>
                                <a href="#page" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">Pages</a>
                                <a href="#contact" className="px-6 h-18 flex itens-center leading-normal no-underline font-bold text-1g text-[15px] border-8 border-b border-[#ffffffla] border-solid">Contact</a>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
}
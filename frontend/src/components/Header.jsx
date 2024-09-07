import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom"; // Ensure this is correctly imported

export default function Header() {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
            <div className="container mx-auto lg:px-3 w-full">
                <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-around justify-between items-center gap-16">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-2">
                            <img src="/logo.png" alt="Logo" className="w-36" />
                        </div>
                    </div>
                    <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                        <NavLink to="/home" className="leading-normal no-underline text-white text-lg hover:text-green">
                            Home
                        </NavLink>
                        <NavLink to="/tours" className="leading-normal no-underline text-white text-lg hover:text-green">
                            Tours
                        </NavLink>
                        <NavLink to="/destination" className="leading-normal no-underline text-white text-lg hover:text-green">
                            Destination
                        </NavLink>
                        <NavLink to="/news" className="leading-normal no-underline text-white text-lg hover:text-green">
                            News
                        </NavLink>
                        <NavLink to="/page" className="leading-normal no-underline text-white text-lg hover:text-green">
                            Pages
                        </NavLink>
                        <NavLink to="/contact" className="leading-normal no-underline text-white text-lg hover:text-green">
                            Contact
                        </NavLink>
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
                        <div className="lg:hidden text-2xl cursor-pointer text-white" onClick={showDropdown}>
                            <MdClose />
                        </div>
                    ) : (
                        <div className="lg:hidden text-2xl cursor-pointer text-white" onClick={showDropdown}>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className="lg:hidden w-full fixed top-24 bg-[#1D231F] text-white">
                        <div className="w-full flex flex-col items-baseline gap-4 p-4">
                            <ul className="w-full flex flex-col justify-center gap-y-4">
                                <NavLink to="/home" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    Home
                                </NavLink>
                                <NavLink to="/tours" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    Tours
                                </NavLink>
                                <NavLink to="/destination" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    Destination
                                </NavLink>
                                <NavLink to="/news" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    News
                                </NavLink>
                                <NavLink to="/page" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    Pages
                                </NavLink>
                                <NavLink to="/contact" className="leading-normal no-underline text-white text-lg hover:text-green">
                                    Contact
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
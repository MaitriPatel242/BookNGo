
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { BsPlay } from "react-icons/bs";

const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000,
        },
        items: 4,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 4,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 2,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
    }
};

export default function Tour() {
    return (
        <div>
            <section>
                <div className="max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg">
                    <div className="w-full relative lg:w-1/2 lg:mt-0 -mt-24 z-10 lg:px-0 px-3">
                        <img src="\tour-2-550x590 (1).jpg" alt="" className="w-full h-64 lg:h-full rounded-l-md object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-green animate-pulse text-white rounded-full p-8">
                                <BsPlay size={30} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-24 lg:px-12 px-3">
                        <div className="relative w-fit py-2 flex itens-center justify-start">
                            <h6 className="bg-[#63AB4526] text-green w-full  rounded-md px-5 py-2 font-bold">Availibility</h6>
                        </div>
                        <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">Enjoy Real Adventure</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
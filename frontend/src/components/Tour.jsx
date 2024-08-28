import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { BsPlay } from "react-icons/bs";
import Accordion from "./Accordion";
import { CiCamera, CiHeart } from "react-icons/ci";
import { MdStar } from "react-icons/md";

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
 
const Tours=({image,name})=>{
    return(
        <div>
             <div>
                <img src={image} alt=""/>
                <div>
                    <p>FEATURED</p>
                    <button><CiHeart/></button>
                </div>
             </div>
             <div>
                <div></div>
                <div>
                    <div>
                        <span>
                            {[...Array.map((_,index)=>{
                                <MdStar key={index}/>
                            })]}
                        </span>
                        <span>
                            <div>
                                <CiCamera size={24}/>
                                <button>5</button>
                            </div>
                        </span>
                    </div>
                </div>
             </div>
        </div>
    )
}

function Tour() {
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
                        <Accordion />
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12" data-aos="Fade-down">
                <div className="w-full py-24 lg:px-12 px-3">
                    <div className="relative w-fit mx-auto py-2 flex itens-center justify-center">
                        <h6 className="bg-[#63AB4526] text-green w-full  rounded-md px-5 py-2 font-bold">Featured Tour</h6>
                    </div>
                    <h3 className="lg:text-5xl lg:w-1/2 mx-auto text-3xl font-bold pb-8 py-4 text-center">Amazing tour places around the world.</h3>
                </div>
              <div>
                  <Carousel responsive={responsive} infinit autoplay={true} itemClass="px-2 pb-4" >
                      </Tours>
                  </Carousel>
              </div>
            </section>

        </div>
    );
}

export default Tour;

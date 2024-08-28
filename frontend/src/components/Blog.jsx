import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaUser, FaComment } from 'react-icons/fa';

const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000,
        },
        items: 5,
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 5,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 3,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
    }
};

export default function Blog() {
    const Blogs = ({ title, text, image }) => {
        return (
            <div className='max-w-sm rounded-lg overflow-hidden shadow-lg p-4 '>
                {image && (
                    <div className='relative h-64 mb-12'>
                        <div className='overflow-hidden rounded-lg relative h-full'>
                            <img src={image} alt="" className='w-full rounded-lg absolute h-full hoverImg' />
                        </div>
                        <div className='bg-orange text-white px-8 py-1 w-fit absolute -bottom-4 left-4 z-10 -rotate-[10deg]'>{title}</div>
                    </div>
                )}
                <div className='flex items-center text-gray-600 text-sm mb-2'>
                    <span className='mr-2 flex items-center gap-2'>
                        <FaUser className='text-green' />Admin
                    </span>
                    <span className="flex items-center gap-2">
                        <FaComment className="text-green" />0 Comments
                    </span>
                </div>
                <div className='font-bold text-2xl mb-2 hover:text-green'>{text}</div>
            </div>
        )
    }
    return (
        <div>
            <section className="max-w-[1320px] mx-auto py-24 px-3 ">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                            <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                            <h6 className="text-green relative font-semibold">
                                Recent news feed
                            </h6>
                        </div>
                        <h3 className="lg:text-5xl text-3xl font-bold pb-8 lg:w-2/3 py-4">Latest news & articles from the blog</h3>
                    </div>
                    <button className="lg:block hidden bg-green text-white rounded-lg text-lg shadow py-4 px-8 font-bold">View More</button>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between items-center">
                        <Blogs text="Things to see and do when visiting Japan" title="Adventure" image="/blog-01-500x360.jpg" />
                        <Blogs text="A place where start new life with adventure travel" title="City Tours" image="/blog-02-500x360.jpg" />
                        <div className='flex flex-col'>
                            <Blogs text="Journeys are best measured with friends" />
                            <Blogs text="Travel the most beautiful places in the world" />
                            <Blogs text="Top 10 destinations and adventure trtavel trips" />
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Carousel responsive={responsive} infinite autoPlay={true} itemClass='px-4'>
                    <div className='h-[298px] relative overflow-hidden'>
                        <img src="/tour-2-550x590 (1).jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                    </div>
                    <div className='h-[298px] relative overflow-hidden'>
                        <img src="/tour-5-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                    </div>
                    <div className='h-[298px] relative overflow-hidden'>
                        <img src="/tour-11-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                    </div>
                    <div className='h-[298px] relative overflow-hidden'>
                        <img src="/tour-3-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                    </div>
                    <div className='h-[298px] relative overflow-hidden'>
                        <img src="/tour-10-550x590.jpg" alt="" className='rounded-lg h-full object-cover hoverImg' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
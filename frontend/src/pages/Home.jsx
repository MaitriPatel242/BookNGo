import Hero from "../components/home/Hero";
import Popular from "../components/home/Popular";
import Tour from "../components/home/Tour";
import Explore from "../components/home/Explore";
import Blog from "../components/home/Blog";
import Offers from "../components/home/Offers";


export default function Home() {
    return (
        <>
            <Hero />
            <Popular />
            <Offers />
            <Tour />
            <Explore />
            <Blog />
        </>
    );
}
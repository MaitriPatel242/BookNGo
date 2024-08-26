import { IoCheckmarkCircle } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const categories = [
    { text: "Family Camping", tilt: "-rotate-6" },
    { text: "Wild Camping", tilt: "rotate-6" },
    { text: "Fishing", tilt: "-rotate-6" },
    { text: "Mountain Biking", tilt: "rotate-6" },
    { text: "Luxury Cabin", tilt: "-rotate-6" },
    { text: "Couple Camping", tilt: "rotate-6" },
];

export default function Popular() {
    const Section = ({ title, text, childern, image, reverse }) => {
        return (
            <div className="max-w-[1320px] mx-auto mt-16 px-3">
                <div className={`lg:flex gap-8 justify-between ${reverse && 'flex-flow-reverse'}`}>
                    <div className="lg:1/2">
                        <h6 className="text-green bg-[#ecf5e8] w-fit rounded-md px-5 py-2 font-bold">{title}</h6>
                        <h3 className="lg:text-5xl text-3xl font-bold pb-8 leading-tight">{text}</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem quam sit ex nemo, explicabo eaque est in reiciendis laborum temporibus nostrum labore.
                        </p>
                    </div>
                    {childern}
                </div>
                <div className="lg:1/2">
                    <div className={`lg:flex w-full ${reverse ? 'justify-start' : 'justify-end'}`}>
                        <img src={image} alt="" className="rounded-t-[300px]" />
                    </div>
                </div>
            </div>
        )
    }

    const Card = ({ text, tilt }) => {
        return (
            <div className={`flex items-center w-fit gap-2 p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-xl ${tilt}`}>
                <IoCheckmarkCircle className="text-xl text-orange" />
                <span className="font-bold text-gray-800">{text}</span>
            </div>
        )
    }

    const ProgressBar = ({ value, text }) => {
        return (
            <div className="flex flex-col items-center">
                <div className="w-28">
                    <CircularProgressbar value={value} text={text} styles={buildStyles({
                        pathColor: "#63AB45",
                        textColor: "#000",
                        trailColor: "#D6D6D6",
                        backgroundColor: "#F8F8F8",
                    })} />
                </div>
                <p className="font-bold mt-2">{text}</p>
            </div>
        )
    }

    return (
        <div>
            <Section image='/image-15.jpg' text="We are most funning company about travel and adventure" title="Welcome to Gowilds">
                <div>
                    {categories.map((category) =>
                        <Card key={category.text} text={category.text} tilt={category.tilt} />
                    )}
                </div>
            </Section>
            <Section image='/image-07.jpg' text="Great oppurtunity for adventure & travels" title="Who we Are" reverse>
                <div className="flex justify-center items-center bg-gray-100 my-12">
                    <div className="bg-white rounded-lg p-8 shadow-xl flex lg:flex-row flex-col items-center lg:gap-16 gap-4 w-full justify-center">
                        <ProgressBar value={50} text="Satisfied Clients" />
                        <ProgressBar value={50} text="Success Rate" />
                    </div>
                </div>
            </Section>
        </div>
    )
}
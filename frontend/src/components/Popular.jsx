
export default function Popular() {
    const Section=({title,text, childern, image, reverse}) =>{
        return(
            <div className="max-w-[1320px] mx-auto mt-16 px-3">
                <div className={`lg:flex gap-8 justify-between ${reverse && 'flex-flow-reverse'}`}>
                    <div className="lg:h-1/2">
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
                        <img src={image} alt="" className="rounded-t-[300px]"/>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div>
            <section image='/image-15.jpg' text="We are most funning company about travel and adventure" title="Welcome to Gowilds">
        <div>

        </div>
            </section>
        </div>
    )
}
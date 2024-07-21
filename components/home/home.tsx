import { Hero } from "./hero";
import { Word } from "./word";

export const Homepage = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 h-[47rem] place-items-center">
            <div className="w-fit h-fit items-center order-2 lg:order-1 place-self-start md:place-self-center mx-auto">
                <Word/>
            </div>
            <div className="p-[2rem] lg:p-[8rem] order-1 lg:order-2 mt-4 lg:my-0">
                <Hero/>
            </div>
        </section>
    )
};

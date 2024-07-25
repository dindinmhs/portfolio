import { Introduce } from "./introduce";
import { Techs } from "./tech";

export const About = () => {
    return (
        <section id="about" className="text-lg mx-auto py-6">
            <div className="flex mb-4 gap-4">
                <h2 className="font-black text-5xl gradient-text">About</h2>
                <div className="h-[1px] self-center bg-gradient-to-l from-purple-600 to-pink-600  w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Introduce/>
                <Techs/>
            </div>
        </section>
    )
};

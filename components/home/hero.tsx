import Image from "next/image";

export const Hero = () => {
    return (
        <div className="relative border-b-8 rounded-3xl border-pink-700">
            <Image
                src={`/dindin.png`}
                alt="dindin"
                priority={true}
                width={1000}
                height={1000}
                className="w-full h-full absolute scale-75 origin-bottom bottom-0"
            />
            <Image
                src={`/splash.svg`}
                alt="splash"
                priority={true}
                width={300}
                height={300}
                className="w-auto h-auto"
            />
        </div>
    )
};

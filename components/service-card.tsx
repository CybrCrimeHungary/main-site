import { StaticImageData } from "next/image";

interface Props{
    title: string;
    description: string;
    image: StaticImageData;
}

export default function ServiceCard({title, description, image} : Props){
    return (
        <div
            className="h-full w-full min-h-60 shadow-md/30 shadow-white rounded-2xl text-white cursor-default transition duration-300 hover:scale-110 hover:z-10"
            style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="h-full w-full flex flex-col justify-end p-5 rounded-2xl backdrop-blur-xs hover:backdrop-blur-none transition duration-300">
                <h2 className="text-2xl font-bold drop-shadow-xl drop-shadow-black">
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
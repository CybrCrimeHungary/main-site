import { StaticImageData } from "next/image";
import styles from './service-card.module.css'
import { cn } from "@/lib/utils";

interface Props{
    title: string;
    description: string;
    image: StaticImageData;
}

export default function ServiceCard({title, description, image} : Props){

    return (
        <div
            className={
                cn(
                    "h-full w-full min-h-60 rounded-2xl text-white cursor-default transition duration-300 hover:scale-110 hover:z-2",
                    styles._service_card
                )
            }
            style={{
                '--card-background-image': `url(${image.src})`,
            } as React.CSSProperties}
        >
            <div className="">
                <div className="h-full w-full flex flex-col justify-end p-5 rounded-2xl backdrop-blur-xs hover:backdrop-blur-none transition duration-300">
                    <h2 className="text-2xl font-bold drop-shadow-xl drop-shadow-black">
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
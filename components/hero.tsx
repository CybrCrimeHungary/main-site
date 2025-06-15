import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";

interface HeroProps {
    title?: string;
    description?: string;
    CTA?: ReactElement;
    backgroundImage: StaticImageData;
    children?: ReactNode;
}

export default function Hero({ title, description, CTA, backgroundImage, children }: HeroProps) {
  return (
    <section className="flex flex-col justify-center h-screen px-5 md:px-10 lg:px-15" style={{backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.55)', backgroundBlendMode: 'overlay'}}>

        {
            children ?? (
                <>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg dark:text-black lg:max-w-2/3">
                        {title}
                    </h1>
                    <p className="text-white dark:text-black lg:max-w-1/3 mt-4 text-md md:text-lg lg:text-xl">
                        {description}
                    </p>
                    {CTA && 
                        <span className="mt-4 flex flex-col md:flex-row gap-4">
                            {CTA}
                        </span>
                    }
                </>
            )
        }
    </section>
  );
}
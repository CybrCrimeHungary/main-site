import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { type ClassValue } from "clsx"
import { cn } from "@/lib/utils";

interface Props {
    image: StaticImageData | string;
    children: ReactNode;
    className?: ClassValue
}

export default function ImageAsText({image, children, className}: Props){
    return (
        <div
          className={cn("w-max bg-clip-text text-transparent mx-auto", className)}
          style={{
            backgroundImage: typeof image == "object" ? `url(${image.src})` : image,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
            {children}
        </div>
    );
}
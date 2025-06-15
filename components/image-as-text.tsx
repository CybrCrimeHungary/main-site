import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { type ClassValue } from "clsx"
import { cn } from "@/lib/utils";

interface Props {
    image: StaticImageData;
    children: ReactNode;
    className?: ClassValue
}

export default function ImageAsText({image, children, className}: Props){
    return (
        <div
          className={cn("w-max bg-clip-text text-transparent mx-auto", className)}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            {children}
        </div>
    );
}
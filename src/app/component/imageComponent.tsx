import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

function InteractiveImage({ imageSrc }: {imageSrc: StaticImageData}) {
    const [transform, setTransform] = useState('scale(1) translate(0%, 0%)');
    const imageRef = useRef<null | HTMLImageElement>(null);

    useEffect(() => {
        const image = imageRef?.current;
        if (!image) return;

        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            const { left, top, width, height } = image.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const scale = 1.5; // Zoom level
            const translateX = (0.5 - x) * 100;
            const translateY = (0.5 - y) * 100;

            setTransform(`scale(${scale}) translate(${translateX}%, ${translateY}%)`);
        };

        const handleMouseLeave = () => {
            setTransform('scale(1) translate(0%, 0%)');
        };

        image.addEventListener('mousemove', handleMouseMove);
        image.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            image.removeEventListener('mousemove', handleMouseMove);
            image.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="overflow-hidden w-[300px] h-[200px]">
            <Image
                ref={imageRef}
                src={imageSrc}
                alt="Interactive"
                className="w-full h-full object-cover transition-transform duration-100 ease-out"
                style={{ transform }}
            />
        </div>
    );
}

export default InteractiveImage;
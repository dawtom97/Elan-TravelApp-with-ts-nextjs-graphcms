import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export const useBannerImage = (data:StaticImageData[]) => {
    const [index, setCurrentIndex] = useState<number>(0);
    useEffect(()=>{
         const interval = setInterval(()=>{
            if(index === data.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(prev => prev + 1);
            }
         },7000)
         return () => clearInterval(interval)
    },[index]);

    return index;
}

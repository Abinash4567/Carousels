import Image from 'next/image';
import { data } from '../types';
import InteractiveImage from "@/app/component/imageComponent";

export default function Card({props}: {props: data}) {
    return (<div className='flex border-[5px] border-green-700'>
        <div className='px-28 border2 boder-red-300 w-[50vw]'>
            <div className="text-[#f5f5fd] text-4xl mt-20">{props.name}</div>
            <div className="text-sm text-green-500 font-bold mb-4">{props.techStack}</div>
            <div className='text-gray-400 font-semibold'>{props.description}</div>
        </div>

        <div className='border-2 w-[50vw] overflow-hidden h-[50vh] mt-12 flex items-center'>
            <Image src={props.image} width={500} height={900} alt='Image'  className='transition-transform duration-300 ease-in-out hover:scale-110'/>
            {/* <InteractiveImage imageSrc={props.image}/> */}
        </div>
    </div>)
}
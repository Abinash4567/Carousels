'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import image from "../../public/tweet_image.jpg"

const Home = () => {
  const parentDiv = useRef(null);
  const childDiv = useRef(null);

  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);



  const { scrollYProgress: childYProgress } = useScroll({
    target: childDiv,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress } = useScroll({
    target: parentDiv,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  useMotionValueEvent(childYProgress, "change", (value) => {
    setProgress1(value);
  });

  const x = useTransform( scrollYProgress, [0, 1], ["0%",  "90%"]);

  const xu = useTransform(childYProgress, [0, 1], ["0%", "90%"])
;
  return (
      <div className='h-[900vh]'>
        <div className='h-[100vh] bg-slate-950'></div>



      <div ref={parentDiv} className='h-[300vh] border-2'>

        <div className='flex borer-2 pt-32 sticky top-0 overflow-hidden'>
              <div className='px-28 border2 boder-red-300 w-[50vw]'>
                <div className="text-[#f5f5fd] text-4xl mt-20">billops</div>
                <div className="text-sm text-green-500 font-bold mb-4">
                  Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql
                </div>
                <div className='text-gray-400 font-semibold'>
                  billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.
                </div>
              </div>
              
              <motion.div style={{x}} className='border-2 w-[50vw]'>
                <Image 
                src={image}
                width={800}
                objectFit='cover'
                alt='Image' />
              </motion.div>
        </div>

      </div>


          <div className="text-xl fixed top-2 bg-slate-900/70 text-white rounded px-2 py-1">
            scrollYProgress: {progress.toFixed(4)}
            <span className='ml-12'>{progress1.toFixed(4)}</span>
          </div>
        
  </div>
  );
};

export default Home;
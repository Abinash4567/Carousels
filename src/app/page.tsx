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
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  useMotionValueEvent(childYProgress, "change", (value) => {
    setProgress1(value);
  });

  const opacity = useTransform( scrollYProgress, [0, 0.7, 1], [0, 0, 1]);
  const x = useTransform(childYProgress, [0, 1], ["0%", "90%"])
;
  return (
    <div className='h-[1000vh]'>
      <div className='bg-slate-900 h-[200vh] border-2 border-red-400'></div>

        <div ref={parentDiv} className='h-[500vh] border-2 border-yellow-500'>
          <motion.div ref={childDiv} style={{opacity}} className='flex border-2 top-0 sticky'>

            <div className='border-2 px-24 w-[50vw] top-44'>
              <div>
                <h1 className="text-[#f5f5fd] text-4xl mt-48">billops</h1>
                <div className="text-sm text-green-500 font-bold mb-4">
                  Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql
                </div>
                <div className='text-gray-500 font-semibold'>
                  billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.
                </div>
              </div>
            </div>


            <div className='border-2 w-[50vw] mt-32 overflow-hidden'>
            <motion.div style={{x}}>
              <Image 
              src={image}
              width={520}
              alt='Image' />
            </motion.div>
            </div>
          </motion.div>
        </div>


        <div className="text-xl fixed top-2 bg-slate-900/70 text-white rounded px-2 py-1">scrollYProgress: {progress.toFixed(4)}
        <span className='ml-12'>{progress1.toFixed(4)}</span>
        </div>
  </div>
  );
};

export default Home;
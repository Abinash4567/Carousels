'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import image from "../../public/tweet_image.jpg"

const Home = () => {
  const parentDiv = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentDiv,
    // offset: ["start start", "end end"]
  });

  const opacity = useTransform( scrollYProgress, [1, 0.8, 0.5, 0], [0, 0.4, 1, 1] )

  return (
    <div className='h-[500vh]'>
      <div className='bg-slate-800 h-[100vh]'></div>

    <motion.div ref={parentDiv} style={{opacity}} className='flex border-2'>
      <div className='brder-2 items-center flex px-24 basis-1/2'>
        <div>
        <h1 className="text-[#f5f5fd] text-4xl">billops</h1>
        <div className="text-sm text-green-500 font-bold mb-4">
          Next.js, Typescript, Prisma, Shadcn, NextAuth, Postgresql
        </div>
        <div className='text-gray-500 font-semibold'>
          billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.
        </div>
        </div>

      </div>


      <div className='flex items-center justify-center bordr-2 basis-1/2'>
        <Image 
        src={image}
        width={450}
        height={1200}
        alt='Image' />
      </div>


    </motion.div>
  </div>
  );
};

export default Home;
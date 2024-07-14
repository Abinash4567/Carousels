'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { projects } from './lib/projects';
import Card from './component/card';

const Home = () => {
  const parentDiv = useRef(null);

  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: parentDiv,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-230%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });


  return (
    <div className='h-[900vh]'>
      <div className='h-[100vh] bg-slate-950'></div>



      <div ref={parentDiv} className='h-[1000vh] border-2'>

        <div className='sticky top-36 overflow-hidden'>
            <motion.div style={{x}} className='flex gap-4'>
              {projects.map((data)=>{
                return <Card key={data.name} props={data}/>
              })}
            </motion.div>

        </div>


      <div className="text-xl fixed top-2 bg-slate-900/70 text-white rounded px-2 py-1">
        scrollYProgress: {progress.toFixed(4)}
      </div>

    </div>
    </div>
  );
};

export default Home;
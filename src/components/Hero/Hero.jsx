import React from "react";
import { IoCartOutline, IoMicOff } from "react-icons/io5";
import { motion } from "framer-motion";

function Hero() {
  const SlideDown = (delay) => {
    return {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };

  return (
    <main>
      <div className="container min-h-[650px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideDown(0.5)}
              initial="initial"
              whileInView="animate"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              <img
                src="/leaf.png"
                alt="leaf"
                className="absolute w-[80px] top-0 right-0 md:right-[100px]"
              />
              Yummy
            </motion.h1>
            <motion.h1
              variants={SlideDown(1)}
              initial="initial"
              whileInView="animate"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={SlideDown(1.5)}
              initial="initial"
              whileInView="animate"
              className="text-sm"
            >
              Laisse tomber les filles Laisse tomber les filles Un jour c'est
              toi qu'on laissera Oui j'ai pleuré mais ce jour là Non, je ne
              pleurerai pas Non, je ne pleurerai pas
            </motion.p>
            <motion.button
              variants={SlideDown(2)}
              initial="initial"
              whileInView="animate"
              className="btn-primary inline-block !mt-10"
            >
              <IoCartOutline className="inline mr-2" />
              <span>Order Now</span>
            </motion.button>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/food.png"
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/spoon.png"
              className="w-[300px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src="/banana2.png"
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[1500px] bg-lightYellow h-[1500px] rounded-3xl absolute top-[-10%] left-[80%] z-0"
      ></motion.div>
    </main>
  );
}

export default Hero;

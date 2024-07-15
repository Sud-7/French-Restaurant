import React from "react";
import { motion } from "framer-motion";

function Banner() {
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
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center  ">
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                scale: { duration: 0.3 },
              }}
              src="/banner.png"
              alt=""
              className="relative z-10 w-full lg:max-w-[350px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full"
            ></motion.div>
          </div>
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={SlideDown(1)}
              initial="initial"
              whileInView="animate"
              className="text-6xl uppercase font-semibold font-league"
            >
              The Best Yummy food in town
            </motion.h1>
            <motion.p
              variants={SlideDown(1.2)}
              initial="initial"
              whileInView="animate"
            >
              Oui j'ai pleuré mais ce jour là Je ne pleurerai pas Je ne
              pleurerai pas je ne pleurerai pas
            </motion.p>
            <motion.button
              variants={SlideDown(1.6)}
              initial="initial"
              whileInView="animate"
              className="btn-primary"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

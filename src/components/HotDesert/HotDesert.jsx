import React from "react";
import { motion } from "framer-motion";

function HotDesert() {
  const HotDesertData = [
    {
      id: 1,
      name: "Hot Dessert",
      img: "/food.png",
      price: "$10",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Hot Dessert",
      img: "/food2-plate.png",
      price: "$10",
      delay: 0.4,
    },
    {
      id: 3,
      name: "Hot Dessert",
      img: "/banner.png",
      price: "$10",
      delay: 0.8,
    },
  ];

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
          duration: 0.4,
          delay: delay,
        },
      },
    };
  };

  return (
    <section>
      <div className="container py-12 relative z-10">
        <motion.h3
          variants={SlideDown(1)}
          initial="initial"
          whileInView="animate"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Hot Dessert
        </motion.h3>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {HotDesertData.map((item) => {
            return (
              <motion.div
                variants={SlideDown(item.delay)}
                initial="initial"
                whileInView="animate"
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3 hover:scale-110 duration-300"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-36 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div className="ml-4 font-bold text-2xl">
                  <h3>{item.name}</h3>
                  <p className="text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HotDesert;

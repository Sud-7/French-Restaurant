import React from "react";
import { motion } from "framer-motion";

function PopularRecipe() {
  const PopularRecipeData = [
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
        y: "100%",
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
        <motion.h3
          variants={SlideDown(0.5)}
          initial="initial"
          animate="animate"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          Our Popular Recipe
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center ">
          {PopularRecipeData.map((item) => {
            return (
              <div className="group space-y-3 text-center bg-white/50 shadow-xl rounded-xl p-3">
                <img
                  src={item.img}
                  alt=""
                  className="w-44 mx-auto img-shadow group-hover:scale-x-100 group-hover:translate-y-[-50px] group-hover:translate-x-10 
                group-hover:rotate-[-50deg] transition-all duration-500"
                />
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy Now
                  </button>
                  <p className="font-semibold text-xl">{item.price}</p>
                  <p className="text-yellow-500 font-bold text-xl">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularRecipe;

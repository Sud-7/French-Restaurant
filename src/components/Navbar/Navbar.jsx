import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { animate, delay, motion } from "framer-motion";

function Navbar() {
  const NavMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
      delay: 0.1,
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Menu",
      path: "/menu",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Delivery",
      path: "/delivery",
      delay: 0.4,
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact",
      delay: 0.5,
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
          duration: 0.6,
          delay: delay,
        },
      },
    };
  };

  return (
    <nav>
      <div className="container flex items-center justify-between font-league">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="/logo.png"
          alt="Logo Rest"
          className="w-36"
        />
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                >
                  <a href={menu.path} className="inline px-2 py-2 text-2xl">
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <motion.div variants={SlideDown(1)} initial="initial" animate="animate">
          <button className="grid place-items-center w-[40px] h-[40px] bg-black text-white rounded-full z-10">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;

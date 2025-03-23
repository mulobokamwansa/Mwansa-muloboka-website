import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Mmotion = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  });
  const swip = useTransform(scrollYProgress, [0, 1], [250, -250] )


  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      y: direction === "down" ? 250 : -250,
    }),
    visible: { opacity: 2, y: 0 },
  };
  

  return (
      <motion.div
        ref={ref}
        custom={scrollDirection}
        
        variants={variants}
        initial="hidden"
        animate={mainControls}
        
        transition={{ duration: 0.9, delay: 0.25 }}

      >
        

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
         

        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.89, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 2,
          bottom: 2,
          left: 0,
          right: 0,
          zIndex: 20,
          // backgroundColor: "#02330f",
        }}
      />
      {children}
      </motion.div>
  
  );
};


//Sticky image
export const StickyImage = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85] )
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0] )


  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
      style={{
        scale,
      }}
      >
        {children}
      </motion.div>

      <motion.div
      />
    </div>
  );
};
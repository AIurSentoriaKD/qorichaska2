"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "from-bottom" | "from-left";
}

function Reveal({
  children,
  width = "fit-content",
  delay = 0.25,
  direction = "from-bottom",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  let variants = {};
  if (direction == "from-bottom") {
    variants = {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    };
  } else if (direction == "from-left") {
    variants = {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    };
  }
  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className="mx-auto sm:mx-0"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: false, amount: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;

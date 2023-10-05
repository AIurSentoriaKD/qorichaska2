"use client";

import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
function Hover({ children, width = "fit-content" }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      style={{ position: "relative", width, overflow: "hidden" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}

export default Hover;

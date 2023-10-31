"use client";

import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  h_type?: string;
}
function Hover({ children, width = "fit-content", h_type = "just" }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{ position: "relative", width, overflow: "hidden" }}
      transition={{ type: h_type, stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}

export default Hover;

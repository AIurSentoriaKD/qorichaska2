"use client";
import React, { useState } from "react";

function ChangeNavbarBG() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
  };
  
}

export default ChangeNavbarBG;

"use client"

import Feature from "@/components/FeatureProject";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

export default function Home() {

  // State variable for tracking the current site state, used for showing or hiding elements
  const [siteState, setSiteState] = useState<number>(0);

  // State variable for tracking the current screen width, initialized to window.innerWidth if available
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Effect to set the initial screen width when the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Effect to update screen width dynamically on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the resize event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Boolean to determine if the screen width qualifies as "large" (greater than 1023 pixels)
  const isLarge: boolean = screenWidth > 1023;



  return (
    <>
      <Navigation siteState={siteState}
        setSiteState={setSiteState}
        isLarge={isLarge}
      />

      {/* feature project that is only visible when no other buttons are pressed (states used) and screen size is large */}
      <div className={`${siteState == 0 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
        <Feature />
      </div>








    </>
  );
}

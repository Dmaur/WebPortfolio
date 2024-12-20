"use client";

import Feature from "@/components/FeatureProject";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  // State for screen size and layout
  const initialWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const [screenWidth, setScreenWidth] = useState<number>(initialWidth);
  const [isLarge, setIsLarge] = useState<boolean>(screenWidth > 1023);

  // State for determining if the component has mounted
  const [hasMounted, setHasMounted] = useState(false);
  // State for site navigation
  const [siteState, setSiteState] = useState<number>(0);

  // Effect to handle resizing and initialize values
  useEffect(() => {
    setHasMounted(true)
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsLarge(width > 1023); // Update both screenWidth and isLarge
    };

    // Set initial values
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <Navigation
        siteState={siteState}
        setSiteState={setSiteState}
        isLarge={isLarge}
      />

      {/* Conditionally render Feature */}
      {siteState == 0 && isLarge && (
        <div className="justify-center mx-5 rounded">
          <Feature />
        </div>
      )}
       <div className="bg-ash_gray opacity-25 absolute bottom-3 left-0 ">
        <Footer/>
      </div>
    </>
  );
}

 "use client"
 import Feature from "@/components/FeatureProject";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {

  // variable for keeping track of the site state for showing/hiding elements. 
  const [siteState, setSiteState] = useState<number>(0);

  return (
    <>
     <Navigation siteState={siteState}
                 setSiteState={setSiteState}/>


    

     
    </>
  );
}

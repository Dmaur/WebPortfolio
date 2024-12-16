 "use client"
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {

  const [siteState, setSiteState] = useState<number>(0);

  return (
    <>
     <Navigation siteState={siteState}
                 setSiteState={setSiteState}/>

    </>
  );
}

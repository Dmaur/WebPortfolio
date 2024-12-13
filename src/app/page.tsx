 "use client"
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {

  const [siteState, changeSiteState] = useState("0");

  return (
    <>
     <Navigation/>

    </>
  );
}

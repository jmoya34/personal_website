"use client"
import { BellIcon } from "@/components/sound_button";
import { AboutInfo }  from "../components/about_page/about_tab";
import BackgroundVideo, { BackgroundImg } from "./background";
import { BoxElement, NavBar } from "@/components/home_page";
import { useState } from 'react';

export default function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);
  return (
    <div className="relative w-full h-full">
      <BackgroundVideo/>
      <main>
        <div>
          <div className={isOverlayOpen ? 'invisible': ''}>
            <div><BackgroundImg className="relative z-10 w-[34.375rem] h-full" img="/imgs/home_menu.png"/></div>
            <BellIcon/>
          </div> 
          <div className="navbar_padding relative z-20 flex flex-col gap-4">
            {/* Watch out. Using the same toggleOverlay will cause multiple tags to open instead of just one*/}
            <NavBar src="/imgs/about_icon.png" text="about" width={84} height={86} toggleOverlay={toggleOverlay} isOverlayOpen={isOverlayOpen}> <AboutInfo/> </NavBar>
            <NavBar src="/imgs/messages.png" text="contact" width={85} height={85} toggleOverlay={toggleOverlay} isOverlayOpen={isOverlayOpen}>  </NavBar>
            <NavBar src="/imgs/projects.png" text="projects" width={84} height={88} toggleOverlay={toggleOverlay} isOverlayOpen={isOverlayOpen}>  </NavBar>
            <NavBar src="/imgs/documents.png" text="documents" width={87} height={87} toggleOverlay={toggleOverlay} isOverlayOpen={isOverlayOpen}>  </NavBar>
            <NavBar src="/imgs/links.png" text="links" width={84} height={84} toggleOverlay={toggleOverlay} isOverlayOpen={isOverlayOpen}>  </NavBar>
          </div>
        </div>
      </main>
    </div>
  );
}

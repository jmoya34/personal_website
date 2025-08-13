'use client'
import { BellIcon } from "@/components/sound_button";
import { AboutInfo }  from "../components/about_page/about_tab";
import { LinksTab }  from "../components/links_page/links_tab";
import BackgroundVideo, { BackgroundImg } from "./background";
import { BoxElement, NavBar } from "@/components/home_page";
import { Children, ReactNode, useState } from 'react';
import { DocumentsTab } from "@/components/documents_page/documents_tab";
import { ContactTab } from "@/components/contact_page/contact_tab";
import { ProjectsTab } from "@/components/projects_page/projects_tab";
import { Project } from "@prisma/client";

type HomeProp = {
    posts: Project[]
}


export default function HomeContainer({posts}: HomeProp) {
  const [overlays, setOverlays] = useState({
    aboutOverlay: false,
    contactOverlay: false,
    projectsOverlay: false,
    documentsOverlay: false,
    linksOverlay: false
  });

  const toggleOverlay = (name: keyof typeof overlays) => {
    setOverlays((isOverlayOpen) => ({
      ...isOverlayOpen,
      [name]: !isOverlayOpen[name],
    }));
  };

  const isOverlayOpen = Object.values(overlays).some((val) => val);;

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
            <NavBar src="/imgs/about_icon.png" text="about" width={84} height={86} 
              toggleOverlay={() => toggleOverlay('aboutOverlay')} isOverlayOpen={overlays.aboutOverlay} toggleIcon={isOverlayOpen}> 
              <AboutInfo/> 
            </NavBar>
            
            <NavBar src="/imgs/messages.png" text="contact" width={85} height={85} 
              toggleOverlay={() => toggleOverlay('contactOverlay')} isOverlayOpen={overlays.contactOverlay} toggleIcon={isOverlayOpen}>
                <ContactTab/>
            </NavBar>
            
            <NavBar src="/imgs/projects.png" text="projects" width={84} height={88} 
              toggleOverlay={() => toggleOverlay('projectsOverlay')} isOverlayOpen={overlays.projectsOverlay} toggleIcon={isOverlayOpen}> 
              <ProjectsTab posts={posts}/>
            </NavBar>
            
            <NavBar src="/imgs/documents.png" text="documents" width={87} height={87} toggleOverlay={() => toggleOverlay('documentsOverlay') } 
              isOverlayOpen={overlays.documentsOverlay} toggleIcon={isOverlayOpen}> 
              <DocumentsTab/>   
            </NavBar>
            
            <NavBar src="/imgs/links.png" text="links" width={84} height={84} 
              toggleOverlay={() => toggleOverlay('linksOverlay')} isOverlayOpen={overlays.linksOverlay} toggleIcon={isOverlayOpen}>
              <LinksTab/>
            </NavBar>
          </div>
        </div>
      </main>
    </div>
  );
}

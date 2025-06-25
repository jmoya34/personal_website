import { BackgroundImg } from "../../app/background";
import { BoxElement } from "../home_page";
import "../../app/globals.css"
import { ContentBox } from "../content_box";

export function LinksTab(){
    return(
        <div>
            <BackgroundImg img="/imgs/horizon_background.png"/>
            <div>
                <div className="absolute z-20 pt-[2.5rem] pl-[3.125rem]">
                    <BoxElement img="/imgs/links.png" text="Links" height={84} width={84}/>
                </div>
                <div className="relative z-10 w-screen h-screen flex items-center justify-center">
                    <img src="/imgs/center_box.png"/>
                    <div className="links-text absolute z-30 flex flex-col gap-[2rem] top-[15.625rem]">
                        <ContentBox link="https://www.linkedin.com/in/jason-moya-4209b9238/" text="LinkedIn"/>
                        
                        <ContentBox link="https://github.com/jmoya34" text="Github"/>
                        
                        <ContentBox link="https://usc.joinhandshake.com/profiles/mssgb3" text="HandShake"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
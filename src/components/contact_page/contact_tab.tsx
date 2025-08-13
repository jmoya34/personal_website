import { BackgroundImg } from "../background";
import { BoxElement } from "../home_page";
import "../../app/globals.css"

export function ContactTab(){
    return (
        <div>
            <BackgroundImg img='/imgs/background.png'/>

                <div>
                            <BackgroundImg img="/imgs/horizon_background.png"/>
                            <div>
                                <div className="absolute z-20 pt-[2.5rem] pl-[3.125rem]">
                                    <BoxElement img="/imgs/messages.png" text="Contact" height={87} width={87}/>
                                </div>
                                <div className="relative z-10 w-screen h-screen flex items-center justify-center">
                                    <img src="/imgs/documents_center_box.png"/>
                                    <div className="links-text absolute z-30 flex flex-col gap-[2rem] top-[15.625rem]">
                                        <div className="relative z-20 pl-[3.125rem]  items-center">
                                            <div className="row-span-1 row-start1 ">
                                                {/* InfoHeader*/}
                                                
                                                <div className="info-text flex flex-col gap-4 text-[1.5rem] self-center">
                                                    <div className="w-[21rem] text-wrap">
                                                        <p>
                                                            Want to get in contact? Message me.
                                                        </p>
                                                    </div>

                                                    <div className="text-wrap flex flex-col items-center justify-center text-center w-[21rem]">
                                                        <p>
                                                            jasonmoya34@gmail.com
                                                        </p>

                                                        <p className="pt-4">
                                                            951-355-6241
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        </div>

        
    );
}
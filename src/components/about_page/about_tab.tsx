import { BackgroundImg } from "../background";
import { BoxElement } from "../home_page";
import "../../app/globals.css"

export function AboutInfo(){
    return (
        <div>
            <BackgroundImg img='/imgs/background.png'/>
                <div className="relative z-20 pl-[3.125rem] grid grid-cols-2 items-center">
                    <div className="row-span-1 row-start1">
                        {/* InfoHeader*/}
                        <div className="pt-[2.5rem] pb-[1.625rem]">
                            <BoxElement img="/imgs/about_icon.png" text="About" height={84} width={86}/>
                        </div>
                        
                        {/* Left Side Text*/}
                        <div className="info-text flex flex-col gap-4 text-[1.5rem]">
                            <h1 className="flex w-[29.063rem] justify-center text-[40px]">Jason Moya</h1>
                            
                            <div className="w-[29.063rem] text-wrap">
                                <p>
                                    I graduated from California State Polytechnic University, Pomona with a Bachelor of Science in Electrical and Computer Engineering.
                                </p>
                            </div>

                            <div className="w-[29.063rem] text-wrap">
                                <p>
                                    I have embraced the &apos;learn by doing&apos; methodology through various projects involving machine learning, TCP networking, GUI scripting, FPGA development, full-stack web development, Flutter with Firebase app development, microcontrollers, and PCB design.
                                </p>
                            </div>

                            <div className="w-[29.063rem] text-wrap">
                                <p>
                                    As a coding instructor at Coding Minds Academy, I strive to continuously learn in-demand skills to enhance the quality of education for children and prepare myself to teach at the university level in the future.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Side Text*/}
                    <div className="relative pt-[13.5rem] w-fit">
                        <img className="z-10" src="/imgs/backscreen.png"/>

                        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center">
                            <h1 className="info-text pt-15 pb-10">Why Elden Ring Inspired?</h1>
                            
                            <p className="info-text max-w-[37.5rem]"> While looking for inspiration for what style of website interested me none satisfied what I was looking for. 
                                Elden Ring&apos;s beautify in its design captivated me that I desired to create a page using elements from a series dear to me. </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
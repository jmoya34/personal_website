"use client"
import { BackgroundImg } from "@/app/background";
import { Overlay } from "@/components/Documents_Overlay";
import { useState } from 'react';
import { ReactNode } from 'react';
type BoxElementProps = {
    img: string;
    text: string;
    height: number;
    width: number;
    onClick: () => void;
};

export function BoxElement({img, text, height, width, onClick}: BoxElementProps){

    return(
        <>
            <div className="flex items-center">
                <button className="cursor-pointer" type="button" onClick={onClick}>
                    <img src={img} width={width} height={height}/>
                </button>
                <h1 className="side-bar-text text-white text-[2.5rem] ml-2">{text}</h1>
            </div>
        </>
    ); 
}


type NavBarProps = {
    children: ReactNode;
    src: string;
    text: string;
    height: number;
    width: number;
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
};

export function NavBar({src, text, height, width, children, isOverlayOpen, toggleOverlay }:NavBarProps){
    return (
        <div>
            <div className={isOverlayOpen ? 'invisible':''}>
                <BoxElement 
                    img={src} 
                    text={text} 
                    height={height}
                    width={width}
                    onClick={toggleOverlay}
                /> 
            </div>

            <Overlay 
                isOpen={isOverlayOpen} 
                onClose={toggleOverlay}
            > 
                
                <nav>
                    {children}
                </nav>
            </Overlay>
        </div>
    );
}
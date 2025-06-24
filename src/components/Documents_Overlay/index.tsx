import { ReactNode } from "react";

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export function Overlay({isOpen, onClose, children}: OverlayProps){
    return(
        <>
        {
            isOpen ? (
                <div className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center">
                    <button onClick={onClose} className="absolute top-4 right-4 z-20">
                        <img className="cursor-pointer hover:opacity-45 w-full h-auto" src='/imgs/close_button.png'/>
                    </button>
                    <div>{children}</div>
                </div>
            ): null
        }
        </>
    );
}
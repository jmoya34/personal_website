"use client"
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export function BellIcon(){
    const [musicIsOn, setMusicOn] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    
    useEffect(() => {
        if (!audioRef.current) return;

        if (musicIsOn) {
        audioRef.current.play().catch((err) => {
            console.warn("Playback failed:", err);
        });
        } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        }
    }, [musicIsOn]);
  
    useEffect(() => {
        const handleVisibilityChange = () => {
            const audio = audioRef.current;
            if(!audio || !musicIsOn) return;

            if (document.hidden){
                audio.pause();
                audio.currentTime = 0;
            } else {
                audio.play().catch((err) =>{
                    console.warn("Resume failed:", err)
                });
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => { document.removeEventListener("visibilitychange", handleVisibilityChange)};
    },[musicIsOn]);
    
    return (
        <div className="absolute top-5 right-5 z-30">
            <button type="button" className="cursor-pointer" onClick={() => setMusicOn(!musicIsOn)}>
                <div>
                    <audio ref={audioRef} src="/audio/ambience.mp3" preload="auto" loop></audio>
                    <img src={ musicIsOn ? "/imgs/bell.png" : "/imgs/mute.png"} className='w-20 h-16'/> 
                </div>
                
            </button>
        </div>
    );
}
export default function BackgroundVideo(){
    return(
        <div className="absolute inset-0 z-[-1] overflow-hidden h-screen w-screen">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/er.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}

type BGProps = {
    img: string;
    className?: string;
};
export function BackgroundImg({img, className}: BGProps){
    className = className ?? 'w-full h-full object-cover';
    return(
        <div className="overlay_background">
            <img src={img} className={className}/>
        </div>
    );
}
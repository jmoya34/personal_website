type ContentBoxProps = {
    text: string;
    link: string
};

export function ContentBox({text, link}: ContentBoxProps){
    return (
        <a href={link} target="_blank">
            <div className="relative group w-fit">
                <img className="opacity-35 group-hover:opacity-100 cursor-pointer" src="/imgs/text_bar_bg.png"/>
                <h1 className="absolute inset-0 z-10 flex items-center pl-30 pointer-events-non">{text}</h1>
            </div>
        </a>
    );
}
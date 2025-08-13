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

type DocumentsContentBoxProps = {
    text: string;
    file_text:string;
    link: string;
};
export function DocumentsContentBox({text, file_text, link}: DocumentsContentBoxProps){
    return (
        <button onClick={() => window.open(link, '_blank')}>
            <div className="relative group w-fit">
                <img className="opacity-35 group-hover:opacity-100 cursor-pointer" src="/imgs/documents_text_bar.png"/>
                <div className="absolute inset-0 z-10 flex items-center gap-x-22 pl-30 pointer-events-none">
                    <h1 className="w-[9.75rem]">{text}</h1>
                    <h2> {file_text}</h2>
                </div>
                
            </div>
        </button>
    );
}
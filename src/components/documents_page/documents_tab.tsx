import { BackgroundImg } from "@/components/background";
import { BoxElement } from "../home_page";
import { DocumentsContentBox } from "../content_box";
import "../../app/globals.css"

export function DocumentsTab(){
    return(
        <div>
            <BackgroundImg img="/imgs/horizon_background.png"/>
            <div>
                <div className="absolute z-20 pt-[2.5rem] pl-[3.125rem]">
                    <BoxElement img="/imgs/documents.png" text="Documents" height={87} width={87}/>
                </div>
                <div className="relative z-10 w-screen h-screen flex items-center justify-center">
                    <img src="/imgs/documents_center_box.png"/>
                    <div className="links-text absolute z-30 flex flex-col gap-[2rem] top-[15.625rem]">
                        <DocumentsContentBox link="/documents/resume.pdf" text="Resume" file_text="Jason_resume.pdf"/>
                        
                        <DocumentsContentBox link="/documents/transcripts_unofficial.pdf" text="Transcripts" file_text="unofficial_transcripts.pdf"/>
                        
                        <DocumentsContentBox link="" text="Cover Letter" file_text="cover_letter.pdf"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
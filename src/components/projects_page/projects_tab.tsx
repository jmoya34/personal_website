import { BackgroundImg } from "@/components/background";
import { BoxElement } from "../home_page";
import type { Project } from '@prisma/client'

type ProjectsProps = {
    posts: Project[];
};

export function ProjectsTab({posts}: ProjectsProps){
    return (
        <div>
            <BackgroundImg img="/imgs/horizon_background.png"/>
            <div>
                <div className="absolute z-20 pt-[2.5rem] pl-[3.125rem]">
                    <BoxElement img="/imgs/projects.png" text="Projects" height={87} width={87}/>
                </div>
                <div className="relative z-15 w-screen h-screen flex items-center justify-center">
                    <img className="absolute  z-10" src="/imgs/projects_bg.png"/>

                    <div className="relative z-20 overflow-y-auto max-h-[42.0rem]">
                    {posts.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        <div>
                            {posts.map((post) => (
                                <div key={post.id.toString()}  className="flex justify-start mb-4 ">
                                    <div className="flex-none mr-5">
                                        <div className="relative">
                                            
                                            <img src="/imgs/project_showcase_img.png"/>
                                            <a href={post.github_link ?? ""} target="_blank">
                                                <img className="absolute z-10 size-fit h-full p-3 top-[1px] " src={post.image_url}/>
                                            </a>
                                            

                                        </div>
                                    </div>
                                    <div className="flex-1 items-center  max-w-[56.25rem] break-words">
                                        <h1 className="text-[2.0rem] text-center">
                                            {post.name}
                                        </h1>
                                        <h2 className="text-[1.5rem]">{post.description}</h2>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}
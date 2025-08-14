import { ProjectsTab } from "@/components/projects_page/projects_tab";
import { prisma } from "@/lib/prisma/db";

export default async function CreateProjectPost(){
    const posts = await prisma.project.findMany();

    return <ProjectsTab posts={posts}/>;
}

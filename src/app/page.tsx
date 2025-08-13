import CreateProjectPost from "./project_posts/page";
import HomeContainer from "@/components/home_container";
import { prisma } from "@/lib/prisma/db";


export default async function Home() {
  const posts = await prisma.project.findMany();

  return(
    <HomeContainer posts={posts}/>
  );
}

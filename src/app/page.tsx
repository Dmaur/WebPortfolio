import Landing from "@/components/Landing";
import { getProjects } from "@/tools/datamanager";
import { Project } from "@/tools/data.model";


export default async function Home() {

  const projects: Project[] = await getProjects();
  
  return (
    <>
     LEEROY JENKINS WUZ HERE OMG THE BUILD AND AUTODEPLOY WORKED!
      <Landing projects={projects}/>
      

       
    </>
  );
}

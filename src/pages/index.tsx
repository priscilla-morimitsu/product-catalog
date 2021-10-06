import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Main } from "../components/atom/Main";
import { Header } from "../components/molecule/Header";
import { ImageCard } from "../components/organism/IndexHome/ImageCard";
import { IProject } from "../server/interfaces/Project";
import { getAllProjects } from "../server/requests/projects";

export default function Home () {
  const [projects, setProjects] = useState<IProject[] | void>([]);

  const requestProject = useCallback(async () => {
    const data = await getAllProjects();
    setProjects(data);
  }, []);

  useEffect(() => {
    requestProject();
  }, [requestProject]);

  return (
    <>
      <Head>
        <title>Catálogo</title>
      </Head>

      <Header />
      
      <Main>
        {projects && projects.length > 0 ? projects.map(item => {
          return (
            <ImageCard 
              key={item.id} 
              id={item.id} 
              imageUrl={item.imageUrl} 
              title={item.title} 
              goal={item.goal} 
              collected={item.collected}  
            />
          );
        }) : 
          <p>Não há projetos no momento!</p> 
        }
      </Main>
    </>
  );
}
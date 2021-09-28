import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Image } from "../components/atom/Image";
import { Column } from "../components/atom/Layout";
import { Main } from "../components/atom/Main";
import { TextContainer } from "../components/atom/TextContainer";
import { Header } from "../components/molecule/Header";
import { BoxForm } from "../components/organism/ProjectId/BoxForm";
import { BoxGoal } from "../components/organism/ProjectId/BoxGoal";
import { IProject } from "../server/interfaces/Project";
import { getProjectById } from "../server/requests/projects";

export default function Home () {
  const [project, setProject] = useState<IProject | void>();

  const { query } = useRouter();
  const projectId = Number(query.project_id);

  const requestProject = useCallback(async (id: number) => {
    if (id) {
      const data = await getProjectById(id);
      setProject(data);
    };
  }, []);

  useEffect(() => {
    requestProject(projectId);
  }, [requestProject, projectId]);

  return (
    <>
      <Head>
        <title>{project?.title} | Catarsinho</title>
      </Head>

      <Header />
        
      {project && (
        <Main>

          <Column className="is-three-fifths-desktop">
            <Image 
              className="image is-fullwidth pb-6" 
              src={project.imageUrl} 
              alt={project.title} 
            />

            <TextContainer title={project.title}>
              {project.description}
            </TextContainer>
          </Column>


          <Column className="is-two-fifths-desktop">
            <BoxGoal project={project} />

            <BoxForm project={project} />

            <Link href="/" passHref={true}>
              <p className="has-text-centered is-clickable">
                Voltar para os projetos
              </p>
            </Link>
          </Column>
          
        </Main>
      )}
    </>
  );
}
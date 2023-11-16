import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <div>{project.url}</div>
      <div>
        <PortableText value={project.content} />
      </div>
    </div>
  );
}

export default Project;

import { notFound } from "next/navigation";
import { CaseStudyLayout } from "../../../components/CaseStudyLayout";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.title} - Sun Wang` : "Case Study - Sun Wang",
    description: project?.summary,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}

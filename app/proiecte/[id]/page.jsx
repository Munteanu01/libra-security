import ProjectPageClient from "./ProjectPageClient"
import { projects } from "@/data/projects"

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Return an array of objects with the id parameter for each project
  return Object.keys(projects).map((id) => ({
    id: id,
  }))
}

export default function ProjectPage({ params }) {
  return <ProjectPageClient params={params} />
}

import JobDetail from "./JobDetail"

export const metadata = {
  title: "Vacantes - Kovara",
  description: "Información detallada sobre la vacante y formulario de aplicación.",
}

export default function JobDetailPage({ params }) {
  return <JobDetail jobId={params.id} />
}
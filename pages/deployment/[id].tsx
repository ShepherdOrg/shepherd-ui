import { useRouter } from 'next/router'

export default function DeploymentDetails() {
  const router = useRouter()

  const deploymentId = router.query.id

  if (!deploymentId) return <h1>Loading...</h1>

  console.log(router.query.id)
  return <h1>Hello!</h1>
}

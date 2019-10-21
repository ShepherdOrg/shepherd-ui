import { useRouter } from 'next/router'

export default function DeploymentDetails() {
  const router = useRouter()

  console.log(router.query.id)
  return <h1>Hello!</h1>
}

import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <div>
      <div className="">{children}</div>
    </div>
  )
}

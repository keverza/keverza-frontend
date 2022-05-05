import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <div>
      <Header />

      <div className="">{children}</div>
    </div>
  )
}

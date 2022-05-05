import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 left-0  p-5">
      <div className=" flex-col ">
        <p className=" space-x-4">
          <Link href="/about">Apie</Link>
          <Link href="/">Pristatymas</Link>
          <Link href="/">Apmokėjimas</Link>
          <Link href="/">Verslui</Link>
          <Link href="/">Kokybės garantija</Link>
          <Link href="/">Pinigų grąžinimas</Link>
        </p>
        <p className="">
          Copyright &copy; Keverza 2019-{year}. All rights reserved.
        </p>
        <p className="">Designed by Keverza</p>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import styles from '../styles/Linkhover.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center p-5 text-gray-700 ">
      <div className=" flex-col ">
        <p className=" space-x-4">
          <Link href="/about">
            <a className={styles.link}>Apie</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Pristatymas</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Apmokėjimas</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Verslui</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Kokybės garantija</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Pinigų grąžinimas</a>
          </Link>
        </p>
        <p className="flex justify-center p-2 ">
          Copyright &copy; Keverza 2019-{year}. All rights reserved.
        </p>
        <p className="flex justify-center">Designed by Keverza</p>
      </div>
    </footer>
  )
}

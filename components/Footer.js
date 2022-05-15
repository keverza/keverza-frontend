import Link from 'next/link'
import styles from '../styles/Linkhover.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex min-w-full justify-center p-5 text-gray-700 ">
      <div className=" flex-col ">
        <ul className="flex flex-row flex-wrap justify-center gap-x-2.5  px-2">
          <li>
            <Link href="/about">
              <a className={styles.link}>Apie</a>
            </Link>
          </li>
          <li>
            <Link href="/delivery">
              <a className={styles.link}>Pristatymas</a>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              <a className={styles.link}>Apmokėjimas</a>
            </Link>
          </li>
          <li>
            <Link href="/b2b">
              <a className={styles.link}>Verslui</a>
            </Link>
          </li>
          <li>
            <Link href="/warranty">
              <a className={styles.link}>Kokybės garantija</a>
            </Link>
          </li>
          <li>
            <Link href="/refund">
              <a className={styles.link}>Pinigų grąžinimas</a>
            </Link>
          </li>
        </ul>
        <p className="flex justify-center px-2  text-sm">
          All rights reserved. &copy; Kevérza 2019-{year}.
        </p>

        <p className="flex justify-center text-sm">Designed by Kevérza.</p>
      </div>
    </footer>
  )
}

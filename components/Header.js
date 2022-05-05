import Link from 'next/link'

function Header() {
  return (
    <header className="fixed p-5">
      <div className="text-3xl">
        <Link href="/">
          <a>
            KEVERZA <p>cocoa rosters</p>
          </a>
        </Link>
      </div>

      <div className="">Lithuania based craft chocolate maker</div>

      <nav className="">
        <ul className="">
          <li>
            <Link href="/About">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/insta">
              <a>Sekite mus:</a>
            </Link>
          </li>
          <li>
            <Link href="/insta">
              <a>Mes ir šokoladas</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

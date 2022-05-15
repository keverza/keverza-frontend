import Link from 'next/link'
import Head from 'next/head'
// import styles from '../styles/Header.module.css'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, MailIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState, useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Image from 'next/image'
import Logo from './Logo'
import { useRouter } from 'next/router'
import HeadMetaInfo from '../context/HeadMetaInfo'
import styles from '../styles/Linkhover.module.css'
import { FaRegEnvelopeOpen, FaInstagram } from 'react-icons/fa'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function HeaderStatic() {
  const {
    headerFixed,
    logoSize,
    logoSubheading,
    opacity,
    scroll,
    setScroll,
    hasScrolled,
  } = useContext(ShopContext)

  const router = useRouter()
  const homePath = router.pathname === '/'

  return (
    <header className="">
      <HeadMetaInfo />
      <div
        className={`fixed top-0 z-40 h-20 min-w-full ${
          homePath && 'shadow-md'
        }`}
      ></div>
      <span className="fixed top-0 z-40 h-20 min-w-full bg-white">
        <span className=" flex  items-center justify-center ">
          <span className="basis-1/4"></span>
          <Link href={`/`}>
            <a className="basis-1/2">
              <Logo subheadingDisplay={false} className=" h-20   pt-1" />
            </a>
          </Link>
          <span className="flex basis-1/4 items-center justify-end">
            <Link href={`https://www.instagram.com/keverza/`}>
              <a className="flex items-center pr-2 hover:fill-zinc-400">
                <span uk-icon="icon: instagram"></span>
              </a>
            </Link>
            <Link href={`mailto:keverza@keverza.com`}>
              <a className="flex items-center pr-4">
                <MailIcon className="h-6 w-6 text-gray-600 hover:text-zinc-400" />
              </a>
            </Link>
          </span>
        </span>
      </span>
    </header>
  )
}

export default HeaderStatic

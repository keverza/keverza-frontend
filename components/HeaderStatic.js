import Link from 'next/link'
// import styles from '../styles/Header.module.css'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState, useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function HeaderStatic() {
  const { headerFixed, logoSize, logoSubheading, opacity, scroll, setScroll } =
    useContext(ShopContext)

  return (
    <header className="">
      <div className="fixed  left-0 top-0 h-20 min-w-full bg-white"></div>
      <div className="flex items-end bg-white">
        <span className="fixed left-0 top-0 min-w-full md:block">
          <span className="">
            <Link href={`/`}>
              <a>
                <img
                  className="z-40 mx-auto  mb-0 mt-1 flex w-40 justify-center pb-0 md:block"
                  src="/logo.svg"
                  alt="Keverza logo"
                />
              </a>
            </Link>
          </span>
        </span>
      </div>
    </header>
  )
}

export default HeaderStatic

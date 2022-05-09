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

function Header() {
  const { headerFixed, logoSize, logoSubheading, opacity } =
    useContext(ShopContext)

  return (
    <header className="">
      <div className="flex min-h-screen items-end bg-white">
        <span className={headerFixed}>
          <span className="">
            <img className={logoSize} src="/logo.svg" alt="Keverza logo" />
            <img
              style={{ opacity: `${opacity}` }}
              className={logoSubheading}
              src="/logosub.svg"
              alt="cocoa roasters"
            />
          </span>
        </span>
      </div>
    </header>
  )
}

export default Header

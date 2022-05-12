import Link from 'next/link'
// import styles from '../styles/Header.module.css'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState, useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Image from 'next/image'
import Logo from './Logo'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Header() {
  const { headerFixed, logoSize, logoSubheading, opacity, setScroll } =
    useContext(ShopContext)

  return (
    <div className=" left-0 top-0 min-h-screen min-w-full bg-gray-100">
      <Logo className="sticky top-80 mx-auto mb-0 flex max-w-md justify-center pb-0" />
    </div>
  )
}

export default Header

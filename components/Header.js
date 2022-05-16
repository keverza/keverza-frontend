import Link from 'next/link'

// import styles from '../styles/Header.module.css'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState, useContext } from 'react'
import ShopContext from '../context/ShopContext'
import Image from 'next/image'
import Logo from './Logo'
import HeadMetaInfo from '../context/HeadMetaInfo'

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
    <>
      <HeadMetaInfo />
      <div className=" flex min-h-screen min-w-full items-center justify-center bg-gray-100 ">
        <Logo
          fill="#373737"
          className="sticky top-1/3 mb-0 max-w-sm pb-0 md:max-w-md lg:max-w-xl"
        />
      </div>
    </>
  )
}

export default Header

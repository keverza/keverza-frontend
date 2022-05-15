import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import ProductList from '../components/ProductList'
import ProductFeature from '../components/ProductFeature'
import Footer from '../components/Footer'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'

const Home = ({ title, keywords, description }) => {
  return (
    <div className="bg-white sm:min-w-full ">
      <Layout />
      <Header />
      <ProductList />
      <ProductFeature />
      <Footer />
    </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

const Home = ({ title, keywords, description }) => {
  return (
    <div className="bg-gray-400">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta property="og:title" content="Keverza cocoa roasters" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.keverza.com" />
        <meta
          property="og:image"
          content="https://www.keverzas.com/share.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Keverza cocoa roasters" />
      </Head>
      <Layout />

      <ProductList />
      <Footer />
    </div>
  )
}

export default Home

Home.defaultProps = {
  title: 'KEVERZA cocoa roasters',
  description: 'Lithuania based bean-to-bar chocolate makers',
  keywords: 'chocolate handmade cocoa-roasters craft-chocolate',
}

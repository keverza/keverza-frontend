import Head from 'next/head'

export default function HeadMetaInfo({ title, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta property="og:title" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.keverza.com" />
        <meta
          property="og:image"
          content="https://www.keverzas.com/share.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Keverza cocoa roasters" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
    </>
  )
}

HeadMetaInfo.defaultProps = {
  title: 'KEVERZA cocoa roasters',
  description: 'Lithuania based bean-to-bar chocolate makers',
  keywords: 'chocolate handmade cocoa-roasters craft-chocolate',
}

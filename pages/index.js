import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by playing <a href="https://sites.google.com/view/theadvancedmethod/webgl/1v1-lol">games</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}

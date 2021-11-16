import Head from 'next/head'
import Navbar from '../navbar'

export default function Search() {
  return (
    <div>
      <Head>
        <title>EdRover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={3} />
    </div>
  )
}
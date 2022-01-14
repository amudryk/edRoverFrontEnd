import Head from 'next/head'
import Navbar from '../../src/components/navbar'
import ExpandedCard from '../../src/components/expandedCard'

export default function Search() {
  return (
    <div class="min-h-screen min-w-screen overflow-hidden bg-gradient-to-b from-blue-700 to-purple-800 text-center -z-1">
    <Head>
      <title>EdRover</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar selected={3}/>

    <div>
      <ExpandedCard/>
    </div>
    
    <footer>
    </footer>
  </div>
  )
}
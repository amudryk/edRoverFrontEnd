import Head from 'next/head'
import Navbar from '../src/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div class="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>EdRover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0}/>
    
      <div className="bg-gradient-to-b from-blue-700 to-purple-800 text-center mt-20 pt-20 -z-1">
        <header className="text-white text-3xl mx-5">
          Discover the perfect higher education plan for you.
        </header>
        <Image src="/home_image.png" width="1052" height="646"/>
      </div>

      <footer>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Navbar from './navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} class="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>EdRover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={0}/>

      <div class="bg-blue bg-gradient-to-b from-blue to-purple text-center mt-20 pt-20 -z-1">
        <header class="font-header text-white text-5xl">
          Discover the perfect higher education plan for you
        </header>
        <Image src="/home_image.png" width="1052" height="646"/>
      </div>

      <footer>
      </footer>
    </div>
  )
}

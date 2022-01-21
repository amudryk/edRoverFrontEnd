import Head from 'next/head'
import Navbar from '../../src/components/navbar'
import FilterBar from '../../src/components/search/filter-bar'
import styles from '../../styles/Home.module.css'

export default function Search() {
  return (
    <div className={styles.container} class="min-h-screen min-w-screen overflow-hidden ">
      <Head>
        <title>EdRover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected={3}/>
      <FilterBar/>
    
      <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-800 text-center pt-20">
    
      </div>

      <footer>
      </footer>
    </div>
  )
}

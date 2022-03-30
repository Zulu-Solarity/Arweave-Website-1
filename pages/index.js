import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Liquid Gold</title><br>
        <meta name="description" content="Solarity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Liquid Gold
        </h1>

            <Image src="/LiquidGold.jpeg" alt="Vercel Logo" width={2048} height={2048} />

      </main>

      <footer className={styles.footer}>
            
        <h11 className={styles.title}>
          Created by <a href="https://linktr.ee/Solarity_Zulu">Solarity</a>
          </h11>
         
      </footer>
    </div>
  )
}

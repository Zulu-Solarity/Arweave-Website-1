import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Liquid Gold</title>
        <meta name="description" content="Solarity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NFT
        </h1>

        <div className={styles.grid}>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <span className={styles.logo}>
            <Image src="/LiquidGold.jpeg" alt="Vercel Logo" width={2048} height={2048} />
          </span>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
            
        <h11 className={styles.title}>
          Created by <a href="https://nextjs.org">Solarity</a>
          </h11>
         
      </footer>
    </div>
  )
}

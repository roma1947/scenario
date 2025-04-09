
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Khassanov — Coaching & Development</title>
        <meta name="description" content="Coaching, counseling and personal development by Roman Khassanov" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Roman’s space
        </h1>
        <p className={styles.description}>
          Business Coaching, Psychological Counseling & Human Growth
        </p>
        <Image src="/roman.jpg" alt="Roman Khassanov" width={200} height={200} />
      </main>

      <footer className={styles.footer}>
        <p>Contact me: khassanov.r87@gmail.com</p>
      </footer>
    </div>
  )
}

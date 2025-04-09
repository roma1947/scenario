
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Coaching</title>
        <meta name="description" content="Добро пожаловать на сайт Roman Coaching" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Добро пожаловать на Roman Coaching
        </h1>
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Roman Coaching
      </footer>
    </div>
  );
}

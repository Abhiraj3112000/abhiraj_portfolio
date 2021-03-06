import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { About } from './about'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhiraj Chatterjee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&family=Edu+VIC+WA+NT+Beginner&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Contact <Link href="https://www.facebook.com/profile.php?id=100006957615281"><a>Me</a></Link>
        </h1>

        <p className={styles.description}>
          Let&apos;s connect through social media 🤝
        </p>

        <div className={styles.grid}>
          <Link href="https://www.linkedin.com/in/abhiraj-chatterjee-15415b202/">
            <a target="_blank" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Let&apos;s Connect through LinkedIn.</p>
            </a>
          </Link>

          <Link href="https://www.instagram.com/chatterjee_abhiraj/">
            <a target="_blank" className={styles.card}>
            <h2>Instagram &rarr;</h2>
            <p>Let&apos;s connect through Instagram.</p>
            </a>
          </Link>

          <Link href="https://github.com/Abhiraj3112000">
            <a target="_blank" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Let&apos;s connect through Github. </p>
            </a>
          </Link>

          <Link href="mailto:chatterjeeabhirajsocial@proton.me">
            <a target="_blank" className={styles.card}>
            <h2>E-mail &rarr;</h2>
            <p>Let&apos;s connect through E-mail. </p>
            </a>
          </Link>

        </div>
        <div className={styles.grid}>
            <h2><Link href="/"><a>&larr; Go to Home Page</a></Link></h2>
        </div>
      </main>

      <footer className={styles.footer}>
          Made with 😻 by Abhiraj{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
      </footer>
    </div>
  )
}

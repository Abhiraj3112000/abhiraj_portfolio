import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { About } from "./about";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhiraj Chatterjee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&family=Edu+VIC+WA+NT+Beginner&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello I am{" "}
          <Link href="/about">
            <a>Abhiraj!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Welcome to my Portfolio 👋 <br /> #notfancy
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>About Me &rarr;</h2>
              <p>Learn more about who and what I am 🧒</p>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>Get to know all the cool projects I have built 💻</p>
            </a>
          </Link>

          <Link href="/techstack">
            <a className={styles.card}>
              <h2>Techstack &rarr;</h2>
              <p>Get to know the tech tools I use for my projects 🔨 </p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>Connect &rarr;</h2>
              <p>Tell me more about yourself and let&apos;s connect 🤝</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with 😻 by Abhiraj{" "}
        {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
      </footer>
    </div>
  );
}

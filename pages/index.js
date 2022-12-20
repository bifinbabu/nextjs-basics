import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.title}>
          atgfs ehgf jhewgf jhgf wejf wejf wehj wejf hgewhjggyuefg w yg sgf wefg
          e
        </p>
        <p className={styles.title}>
          atgfs ehgf jhewgf jhgf wejf wejf wehj wejf hgewhjggyuefg w yg sgf wefg
          e
        </p>
        <Link href="/ninjas">
          <div className={styles.btn}>See All Ninjas</div>
        </Link>
      </div>
    </>
  );
}

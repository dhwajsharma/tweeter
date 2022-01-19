import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  );
}

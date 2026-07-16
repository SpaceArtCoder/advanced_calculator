// import Image from "next/image";
import styles from "./page.module.scss";
import Device from "./components/Device/Device";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Device />
      </main>
    </div>
  );
}
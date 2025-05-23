import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/home/Header';
import Form from '@/components/home/Form';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <Form />
      </div>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Copyright | Thainá Souza | 2025
        </a>
      </footer>
    </div>
  );
}

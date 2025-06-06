import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/home/Header';
import Form from '@/components/home/Form';
import PackagesAvailable from '@/components/tours/PackagesSection';
import ExploreSection from '@/components/beaches/ExploreSection';
import Carousel from '@/components/destinations/Carrousel';
import GuidesSection from '@/components/guides/GuidesSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <Form />
      </div>
      <main className={styles.main}>
        <PackagesAvailable />
      </main>
      <section className={styles.beachesSection}>
        <ExploreSection />
      </section>
      <section>
        <Carousel />
      </section>
      <section className={styles.guidesSection}>
        <GuidesSection />
      </section>
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

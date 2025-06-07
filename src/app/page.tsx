import styles from './page.module.css';
import Header from '@/components/home/Header';
import Form from '@/components/home/Form';
import PackagesAvailable from '@/components/tours/PackagesSection';
import ExploreSection from '@/components/beaches/ExploreSection';
import Carousel from '@/components/destinations/Carrousel';
import GuidesSection from '@/components/guides/GuidesSection';
import ContactSection from '@/components/contact/ContactSection';

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
      <section className={styles.contactSection}>
        <ContactSection />
      </section>
    </div>
  );
}

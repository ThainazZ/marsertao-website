import Image from 'next/image';
import Menu from './Menu';
import styles from '../../app/page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Logo do Mar & Sertão"
        width={195}
        height={100}
      />
      <Menu />
    </header>
  );
}

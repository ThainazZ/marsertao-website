import Image from 'next/image';
import Menu from './Menu';
import styles from '../../app/page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        aria-hidden
        src="/logo.png"
        alt="Logo do Mar & Sertão"
        width={125}
        height={95}
      />
      <Menu />
    </header>
  );
}

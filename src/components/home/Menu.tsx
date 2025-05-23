import styles from '../../app/page.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <a href="#home">Início</a>

      <a href="#pacotes">Pacotes</a>

      <a href="#informacoes">Você precisa saber</a>
    </nav>
  );
}

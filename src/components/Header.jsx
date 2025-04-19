import styles from './Header.module.css';

<<<<<<< HEAD
import logoIgnite from '../assets/logo-ignite.svg';
=======
import igniteLogo from '../assets/ignite-logo.svg';
>>>>>>> origin/main

export function Header() {
  return (
    <header className={styles.header}>
<<<<<<< HEAD
      <img src={logoIgnite} alt="Logo do Ignite" />
=======
      <img src={igniteLogo} alt="Ignite Logo" />
>>>>>>> origin/main
      <h1>Ignite Feed</h1>
    </header>
  );
} 
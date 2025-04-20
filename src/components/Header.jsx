import styles from "./Header.module.css";

import logoIgnite from "../assets/logo-ignite.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}

import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="/cover.jpg" alt="Capa" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Robson16.png" alt="Avatar" />
        <strong>Robson H. Rodrigues</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/Robson16.png"
            alt="Avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Robson H. Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="24 de Outubro às 08:13" dateTime="2023-10-24 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera, tudo certo?</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no evento NextLevelWeek #14 da RockeatSeat, onde desenvolvi uma
          aplicação de anotações.
        </p>
        <p>
          <a href="https://github.com/Robson16/nlw14-notes">
            👉{" "}github.com/Robson16/nlw14-notes
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#ignite</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

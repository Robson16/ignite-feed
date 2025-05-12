import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  commentData: {
    id: string;
    content: string;
  };
  onDeleteComment: (id: string) => void;
}

export function Comment({ commentData, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(commentData.id);
  }

  function handleLikeComment() {
    setLikeCount((prevCount) => prevCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/Robson16.png"
        alt="Avatar"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson H. Rodrigues</strong>
              <time
                title="24 de Outubro às 08:13"
                dateTime="2023-10-24 08:13:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{commentData.content}</p>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

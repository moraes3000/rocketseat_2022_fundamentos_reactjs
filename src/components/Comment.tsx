import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar
        src='https://avatars.githubusercontent.com/u/29808643?v=4'
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Moraes</strong>
              <time title='07 de junho as 22:30' dateTime='2022-06-07 22:30'>Cerca de 1 hora atrás</time>
            </div>
            <button title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
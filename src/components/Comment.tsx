import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/29808643?v=4'
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat labore laudantium blanditiis commodi esse nulla, quo illum excepturi, quam delectus ea modi expedita iure vel suscipit illo repellat enim quod.</p>
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
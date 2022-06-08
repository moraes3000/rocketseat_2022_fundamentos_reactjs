import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar
            src='https://avatars.githubusercontent.com/u/29808643?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>Bruno Moraes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='07 de junho as 22:30' dateTime='2022-06-07 22:30'>Publicado a 1 hora</time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, vero? Tempore temporibus
        </p>
        <p>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#nlw</a>
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea className='' placeholder='Deixe o seu comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article >

  )
} 
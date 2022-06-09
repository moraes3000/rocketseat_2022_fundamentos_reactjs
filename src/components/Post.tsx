import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
  avatarURL: string;
  name: string;
  rule: string;
}
interface Content {
  type: 'paragraph' | 'link';
  content: string;
}
interface PostProps {
  author: Author,
  content: Content,
  publishedAt: Date,
}



export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    1
  ])
  const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true

  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()
    setComments([...comments, comments.length + 1])
  }
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar
            src={author.avatarURL}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.rule}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>

        {content.map((line) => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }
          else if (line.type == 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe o seu feedback</strong>

        <textarea className='' placeholder='Deixe o seu comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>

        {comments.map((comment) => {
          return <Comment key={comment} />
        })}


      </div>
    </article >

  )
} 
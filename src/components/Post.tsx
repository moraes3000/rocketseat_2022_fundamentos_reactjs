import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'

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
  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState([
    'Post 1'
  ])
  const isNewCommentInputEmpty = newCommentText.length == 0

  const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR
  })

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    // console.log(`Deletar comentário ${commentToDelete}`)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!!')
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

        <textarea className=''
          name='comment'
          placeholder='Deixe o seu comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentInputEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        })}
      </div>

    </article >
  )
} 
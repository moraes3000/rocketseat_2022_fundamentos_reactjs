import { Header } from "./components/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"


const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/29808643?v=4',
      name: 'Bruno Moraes',
      rule: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
      },
      {
        type: 'paragraph',
        content: 'Lorem ipdas dasum dolor sit amet consectetur adipisicing elit'
      },
      {
        type: 'link',
        content: '#rocketseat'
      },
    ],
    publishedAt: new Date('2022-06-08 12:55')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://veja.abril.com.br/wp-content/uploads/2017/12/homer-simpson-1-264a0.jpg',
      name: 'Homer Simpson',
      rule: 'Gestor de Usina Nuclear'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsddas um dolor sit amet consectetur adipisicing elit'
      },
      {
        type: 'paragraph',
        content: 'Lorem ipsd sadum dolor sit amet consectetur adipisicing elit'
      },
      {
        type: 'link',
        content: '#rocketseat'
      },
    ],
    publishedAt: new Date('2022-06-07 12:55')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App

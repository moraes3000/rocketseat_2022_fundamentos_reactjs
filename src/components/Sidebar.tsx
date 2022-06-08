import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src='https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
        alt='imagem de capa'
        className={styles.cover}
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/29808643?v=4' />
        <strong>Bruno Moraes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'><PencilLine size={20} />Editar seu Perfil</a>
      </footer>
    </aside>
  )
}
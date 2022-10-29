import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from './Sidebar.module.css'

const imageUrl = "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imageUrl} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/luancardosoti.png" />

        <strong>Luan Cardoso</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
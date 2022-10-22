import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://grendenecombr.sharepoint.com/sites/NovaIntranet/Galeria/Dev%20Day%20Grendene/_DSC1165.jpg" alt="" />

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
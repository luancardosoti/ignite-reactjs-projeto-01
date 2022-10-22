import { Header } from './components/Header'
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';

import './global.css';


const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luancardosoti.png",
      name: "Luan Cardoso",
      role: "Dev. de Sistemas II"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'luancardoso.com' },
    ],
    publishedAt: new Date('2022-10-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'diegofernandes.com' },
    ],
    publishedAt: new Date('2022-10-08 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                {...post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App


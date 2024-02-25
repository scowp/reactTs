import Post from "./components/Post"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import './global.css'
import styles from "./App.module.css"
import { PostType } from "./components/Post"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/scowp.png",
      name: "Matheus Campolongo",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋'},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      
    ],
    publishedAt: new Date("2024-01-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MaateusMDS.png",
      name: "Mateus Mendes",
      role: "Backend Developer"
    },
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋'},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      
    ],
    publishedAt: new Date("2024-01-10 22:00:00")
  }
]

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} post={post}/>
          })}
        </main>
      </div>
    </>
  )
}

export default App

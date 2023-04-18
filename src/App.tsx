import React from 'react';
import { Post } from './components/post/Post';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';

//author :{avatar_url: "", name :"" , role: "", }
//publisheaAt: Date
//contente: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/paulolucca.png",
      name: "Paulo Cesar",
      role: "Engenheiro da Computação"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto', },
      { type: 'link', content: 'paulolucca.enginnercomputer/developer', },

    ],
    publishedAt: new Date('2023-04-03 20:00:00'),


  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Maik Brito",
      role: "Educator Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Fazendo novo projeto', },
      { type: 'link', content: 'jane.design/doctorcare', },

    ],
    publishedAt: new Date('2023-04-03 15:00:00'),


  },


];
export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(posts => {

            return (<Post
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
              

            />
            )

          })}

        </main>

      </div>



    </div>



  )
}



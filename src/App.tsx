import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post'

import styles from './styles/index.module.scss'

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface PostData {
 id: number;
 title: string;
 body: string;
 readMore: Posts[]
}

function App() {
  const [view, setView] = useState('postList')
  const [posts, setPosts] = useState<Posts[]>([]);
  const [postData, setPostData] = useState<PostData>({id: 0,title: "", body: "", readMore: []})

  function handlePostClick(postId: number, postTitle: string, postBody: string, postList: Posts[]) {
    setPostData({id: postId, title: postTitle, body: postBody, readMore: postList})
    setView('post')
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()
    .then(data => setPosts(data)))
  }, [])
  return (
    <>
    <Header handleViewChange={()=> setView('postList')} />
    <div className={styles.container}>
    {view === 'post' ?  <Post post={postData} handleViewChange={()=> setView('postList')} /> : null} 
    {view === 'postList' ?  <section className="post-list">
      <h1>Lista de posts</h1>

      <ul>
        {posts.map((post) => {
          
          return (
            <li key={post.id}>
              <button
              onClick={() => handlePostClick(post.id, post.title, post.body, posts)}
              ><strong>{post.title}</strong></button>

            </li>
          )
        })}
      </ul>
    </section> : null} 
    </div>
    </>
      )
  
}

export default App;

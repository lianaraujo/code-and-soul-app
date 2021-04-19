import { useState } from "react"

import styles from '../styles/components/post.module.scss'

interface Posts {
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  handleViewChange: () => void;
  
  post: {
    id: number;
    title: string;
    body: string;
    readMore: Posts[]
    
  }
}

export function Post(props: PostProps) {
  const [currentPost, setCurrentPost] = useState({
    id: props.post.id,
    title: props.post.title,
    body: props.post.body,
    })
  
  const filteredArray = props.post.readMore.filter(item => {return item.id !== currentPost.id})
  const readMorePosts = filteredArray.slice(0, 4)
 
  function handlePostChange(postId: number, postTitle: string, postBody: string) {
    setCurrentPost({
    id: postId,
    title: postTitle,
    body: postBody,
    })
  }

  return (
    <div className={styles.postContainer}>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>

      <button id={styles.backButton} onClick={props.handleViewChange} >Voltar para lista de posts</button>

      <h2>Leia mais: </h2>

      <ul>
          {readMorePosts.map((post) => { 
           return (
            
             <li key={post.id}>
               <button
                onClick={() => handlePostChange(post.id, post.title, post.body)}
               ><strong>{post.title}</strong></button>

             </li>
           )
         
            })}
        </ul>
    </div>
  )
}
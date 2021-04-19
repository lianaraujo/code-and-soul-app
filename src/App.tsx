// listagem e visualização de postagem com duas views:

// View1 - visualização que lista todos os posts a partir de uma chamada de api

// exemplo de retorno GEt:
// {
// userId:1,
// id:1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

// View2 - Visualização interna do post exibindo o title e body do post
// (opcional) - nessa view também pode ser exibido como "Leia mais" os 4 primeiros posts 
// retornados pela API. Removerndo o post que está sendo visualizado na Interna, mas
// sempre mantendo 4 posts em exibição;
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post'

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
    </>
  )
  
}

export default App;

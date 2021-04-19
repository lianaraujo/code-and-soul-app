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
import { Post } from './components/Post'

interface Posts {
  id: number;
  title: string;
  body: string;
}

type PostData = Omit<Posts, "id">

function App() {
  const [view, setView] = useState('postList')
  const [posts, setPosts] = useState<Posts[]>([]);
  const [postData, setPostData] = useState<PostData>({title: "", body: ""})

  function handlePostClick(postTitle: string, postBody: string) {
    setPostData({title: postTitle, body: postBody})
    setView('post')
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()
    .then(data => setPosts(data)))
  }, [])

  return (
    <>
    {view === 'post' ?  <Post post={postData} handleViewChange={()=> setView('postList')} /> : null} 
    {view === 'postList' ?  <section className="post-list">
      <h1>Lista de posts</h1>

      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <button
              onClick={() => handlePostClick(post.title, post.body)}
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

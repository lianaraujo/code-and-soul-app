interface PostProps {
  handleViewChange: () => void;
  post: {
    title: string;
    body: string;
  }
}

export function Post(props: PostProps) {
  return (
    <>
    <h1>{props.post.title}</h1>
    <p>{props.post.body}</p>

    <button onClick={props.handleViewChange} >Lista de Posts</button>
    </>
  )
}
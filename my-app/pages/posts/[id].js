// about component

export default function Details(props) {
  return (
    <div>
      Dynamic Details component

      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)  
  const data = await res.json()
  return {
    props: {
      post: data
    }
  }
}
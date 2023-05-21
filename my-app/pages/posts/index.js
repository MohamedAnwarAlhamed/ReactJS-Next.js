// post component

export default function Posts(props) {
    
    return (
        <div>
            dynamic
            {props.posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                </div>
            )) }
        </div>
    )
}

export async function getStaticProps() { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const data = await res.json()
    return {
        props: {
            posts: data
        }
    }
}
import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())

  // getIncremental static regeneration

  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 10).map(post => (
    <article key={post.id}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}

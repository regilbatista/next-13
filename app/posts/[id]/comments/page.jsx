import styles from './comments.module.css'
import Image from 'next/image'

const fetchComments = async(id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <div className={styles.comments}>
      <ul className={styles.ul}>
        {comments.map(comment => (
          <li key={comment.id} className={`${styles.commentsList}`}>
            <div className={styles.userImage}>
              <Image className={styles.Image} width='50' height='50' alt={comment.name} src={`https://i.pravatar.cc/150?u=${comment.email}`} />
            </div>
            <h4>{comment.name}</h4>
            <div className={styles.dsList}> 
              <small className={styles.sList}>{comment.body}</small>
            </div>
            <hr className={styles.hr} />
          </li>
        ))}
      </ul>
    </div>
  )
}

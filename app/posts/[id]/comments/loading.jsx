import styles from './comments.module.css'

export default function Loading () {
  return (
    <div className={styles.comments}>
      <ul className={styles.ul}>
        {Array(5).fill().map((_, i) => (
          <li key={i} className={styles.LoadingCommentsContainer}>
            <span className= {styles.LoadingCommentsImg} />
            <h4 className={styles.LoadingCommentsTitle} />
            <div className={styles.LoadingCommentsTextContainer}>
              <small className={styles.LoadingCommentsText} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

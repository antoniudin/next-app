import styles from '../styles/Home.module.sass'

export default function Link (props) {
    return (
        <div className={styles.link}>{props.value}
        <div className={styles.linkLine}></div>
      </div>
    )
}
import styles from '../styles/Home.module.sass'

export default function About() {
    return (
        <div className={styles.content}>
            <h2>What I’ve done</h2>
            <div className={styles.skill_title}>
            <div className={styles.owner}></div>
                <h4>Ownership</h4>
            </div>
                <p>
                    Designed, developed, and released a POS system app with 1000+ downloads on the Google Play Market over 120 b2b  paying customers. https://www.linxx.pro
                </p>
<br />
<div className={styles.skill_title}>
            <div className={styles.manager}></div>
                <h4>Managment</h4>
            </div>
<p>
Led the team of support engineers that installed, configured, maintained and troubleshooted software and hardware issues
</p>
        </div>
    )
  }
  
import styles from '../styles/Home.module.sass'
import Link from './link'

export default function About() {
    return (
        <div className={styles.content}>
            <h3>Hi, my name is </h3>
            <h2>John Doe. I build things for the internet</h2>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on front-end</p>
            <p></p>
            <br />
        
            <div className={styles.socials}>
                <div className={styles.techstack_item}>Resume</div>
                <div className={styles.techstack_item}>Slides</div>
                <a href="https://github.com/antoniudin" className={styles.github}></a>
                <a href="https://github.com/antoniudin" className={styles.youtube}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.linkedin}></a>
            </div>
        </div>
    )
  }
  
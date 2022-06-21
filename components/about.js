import styles from '../styles/Home.module.sass'
import Link from './link'

export default function About() {
    return (
        <div className={styles.content}>
            <div className={styles.shortcontent}>
            <p>Hi, my name is</p>
            </div>
            <h2>Anton Iudin</h2>
        <p>
        I am a software engineer with previous expirience in IT wich I use working on different projects. <br /><br />
I have an experience with .NET, C#, MVC, MS SQL, RESTfull APIs <br />I can work on the server side if you are dealing with Microsoft stack. But recently I am focused on front-end and deal with JavaScript and React. 
            </p>
            <br />
        
            <div className={styles.socials}>
                <a  href="https://drive.google.com/file/d/1naw-eIYAzQgwKKh8bJasNjkJRbs7h-S3/view?usp=sharing" className={styles.techstack_item}>Resume</a>
                <div className={styles.techstack_item}>Slides</div>
                <a href="https://github.com/antoniudin" className={styles.github}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.youtube}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.linkedin}></a>
            </div>
        </div>
    )
  }
  
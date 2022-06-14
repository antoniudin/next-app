import styles from '../styles/Home.module.sass'
import Link from './link'

export default function About() {
    return (
        <div className={styles.content}>
            <p>Hi, my name is</p>
            <h2>Anton Iudin</h2>
        <p>
I have been working in IT for more than ten years.
I have worked my way up from a technical support specialist to a product owner. Along the way, I've been a part of many interesting projects. I've been working as a 
<span className={styles.subtitle}>software engineer</span>
for the last couple of years and use all my knowledge to help people create something really cool. 
<br />
<br />
I have experience with .NET, C#, MVC, MS SQL, RESTfull APIs, so I can work on the server side if you're dealing with the Microsoft stack. But lately I've been focusing on Front-end and feel quite comfortable with JavaScriptan and React.</p>
            <p></p>
            <br />
        
            <div className={styles.socials}>
                <a target="_blank" href="https://drive.google.com/file/d/1naw-eIYAzQgwKKh8bJasNjkJRbs7h-S3/view?usp=sharing" className={styles.techstack_item}>Resume</a>
                <div className={styles.techstack_item}>Slides</div>
                <a target="_blank" href="https://github.com/antoniudin" className={styles.github}></a>
                <a target="_blank" href="https://www.linkedin.com/in/ai431/" className={styles.youtube}></a>
                <a target="_blank"href="https://www.linkedin.com/in/ai431/" className={styles.linkedin}></a>
            </div>
        </div>
    )
  }
  
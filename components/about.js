import styles from '../styles/Home.module.sass'
import Link from './link'

export default function About() {
    return (
        <div className={styles.content}>
            {/* <div className={styles.shortcontent}> */}
            <p>Hi, my name is</p>
            {/* </div> */}
            <h2>Anton Iudin</h2>
        <p>I am a software engineer with previous experience in IT witch I use working on different projects.</p>
        
        <div className={styles.spacer}></div>
<p>I have an experience with .NET, C#, MVC, MS SQL, RESTfull APIs. I can work on the server side if you dealing with .net, but recently I am focused on front-end and work with JavaScript and React.

 
            </p>
            
            <div className={styles.socials}>
                <a  href="https://drive.google.com/file/d/1naw-eIYAzQgwKKh8bJasNjkJRbs7h-S3/view?usp=sharing" className={styles.techstack_item}>Resume</a>
                <a href="https://docs.google.com/presentation/d/1eVumBa9IFDiZzuddp1U5B3O95OUhYOv0g9FMZ81ow88/edit?usp=sharing" className={styles.techstack_item}>Slides</a>
                <a href="https://github.com/antoniudin" className={styles.github}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.youtube}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.linkedin}></a>
            </div>
        </div>
    )
  }
  
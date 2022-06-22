import styles from '../styles/Home.module.sass'
import Link from './link'

export default function About() {
    return (
        <div className={styles.content}>
            {/* <div className={styles.shortcontent}> */}
            <p>Hi, my name is</p>
            {/* </div> */}
            <h2>Anton Iudin</h2>

        <p>I am a software engineer with previous experience in IT, which I use working on various projects.</p>
        
        <div className={styles.spacer}></div>
<p>I have experience with .NET, C#, MVC, MS SQL, RESTfull APIs. I can work on the server side if you are dealing with .net, but lately I have been focusing on front-end and working with JavaScript and React.
            </p>
            
            <div className={styles.socials}>
                <a  href="bit.ly/3HLObrN" className={styles.techstack_item}>Resume</a>
                <a href="https://bit.ly/3Nc8aRl" className={styles.techstack_item}>Slides</a>
                <a href="https://github.com/antoniudin" className={styles.github}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.youtube}></a>
                <a href="https://www.linkedin.com/in/ai431/" className={styles.linkedin}></a>
            </div>
        </div>
    )
  }
  
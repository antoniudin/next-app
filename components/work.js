import styles from '../styles/Home.module.sass'
import Tech from './tech'

export default function Work() {
    return (
        <div className={styles.content}>
            <h2>What I have built</h2>
            <h4><a href="https://meetty.me">Meetty.me</a></h4>
            
            <p>A web app for online event booking and schedule management. I worked on the logic, routing, server requests and data processing, responsive design for all pages. 
            I did not use any third-party libraries and created all the components 
            from scratch, using only pure css.</p>

            <Tech things={['React', 'Redux', 'js', 'css', 'html']}/>
            <br />
            <p>Take a look at my other projects on <a href="https://github.com/antoniudin">Github</a></p>
            <div className={styles.shortcontent}>
            <h4>UNO game</h4>
            <p>One of my pet projects, you can play UNO online against two players managed by the computer</p>
        
            <Tech things={['React', 'Java Script', 'css', 'html']}/>
            <h4>To Do list</h4>
            <p>A simple do to list, built on .net platform with user authentification, different types of user roles,  </p>
        
            <Tech things={['.NET Core','C#', 'MVC','Entity Framework','MS SQL', 'LINQ', 'bootstrap']}/>
            </div>
        </div>
    )
  }
  

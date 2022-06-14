import styles from '../styles/Home.module.sass'
import Tech from './tech'
import Link from './link'

export default function Work() {
    return (
        <div className={styles.content}>
            <h2>Some things I've built</h2>
            <h4>Meetty.me</h4>
            <p>A web app for online event booking and schedule management. <br />
            I worked on the logic, routing, server requests and data processing, responsive design for all pages. 
            For this project I did not use any third-party libraries and created all components (calendar, menus, drop-down lists, notifications, buttons and toggles) from scratch, using only pure css.</p>

            <Tech things={['React', 'Redux', 'JavaScript', 'html', 'css']}/>
        
            <h4>Links</h4>
            <p>Small web app, partly repeats the functionality of bit.ly. You can create a link, give it a short name and track it</p>
        
            <Tech things={['.NET API', 'MS SQL', 'React', 'html', 'css']}/>
            <h4>To Do list</h4>
            <p>A simple do to list, built on .net platform with user authentification, different types of user roles,  </p>
        
            <Tech things={['.NET Core','C#', 'MVC','Entity Framework','MS SQL', 'LINQ', 'bootstrap']}/>
        
        </div>
    )
  }
  

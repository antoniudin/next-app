import styles from '../styles/Home.module.sass'
import Tech from './tech'
import Link from './link'

export default function Work() {
    return (
        <div className={styles.content}>
            <h2>Some things I’ve built</h2>
            <h3>To Do List</h3>
            <div>My first project on .Net platform</div>
            <br />
            <Tech things={['.Net Core', 'jQuery', 'SQL']}/>

            <h3>bit.ly analog</h3>
            <div>A small web app, partly repeats the functionality of bit.ly. You can create a link, give it a short name and track it</div>
            <br />
            <Tech things={['.NET API', 'SQL', 'React', 'html', 'css']}/>
            
            <h3>UNO game</h3>
            <div>Lorem Ipsum Lorem ipsum Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum</div>
            <br />
            <Tech things={['JavaScript', 'React', 'html', 'css']}/>

            <h3>Meetty.com</h3>
            <div>My first commercial project wich I'm really proud.</div>
            <br />
            <Tech things={['JavaScript', 'React', 'Redux', 'sass', 'html', 'css']}/>
        </div>
    )
  }
  
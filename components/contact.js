import styles from '../styles/Home.module.sass'

export default function Contact() {
    
    const emailMe = () => {
        window.location.href = "mailto:yudin431@gmail.com?&subject=Job%20Offer";
    }

    return (
        <div className={styles.content}>
            <h2>Get In Touch</h2>
            
            <p>I’m currently looking for a job. If you have an interesting project, a job or you just  like my portfolio, feel free to send me a message.'</p>
            
            <div className={styles.contact_button} onClick={()=>emailMe()}>Say Hello</div>
            
        </div>
    )
}
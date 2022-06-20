import styles from '../styles/Home.module.sass'
import emailjs from 'emailjs-com';
import { useState } from 'react';
// import Joi from 'joi';

export default function Contact() {
    
    const [success, setSuccess] = useState(false)
    
    const [state, setState ] = useState({
        from_name: '',
        message: '',
        user_email: ''
    });
   
    // const schema = Joi.object({
    //     name: Joi.string().min(1),
    //     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    //     message: Joi.string().min(5)

    // })


    const emailMe = () => {
        setState({...state, success: true})    
        // emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, state, process.env.REACT_APP_API_KEY)
	    //     .then((response) => {
                
	    //     console.log(response)
                
	    //     });
    }

    return (
        <div className={styles.content}>
            <h2>Get In Touch</h2>
            {success? <p>{`Thank you! If ${state.user_email} is a real email, I will reply as soon as as possible`}</p> :  
            <div className={styles._form}>
            <label htmlFor="name">Your name</label>
            <input className={styles._input} type="text" value={state.from_name}  onChange={(e)=>setState({...state, from_name: e.target.value})} name='name'/>
            <br />
            <label htmlFor="email">Your email</label>
            <input className={styles._input} type="text" value={state.user_email} onChange={(e)=>setState({...state, user_email: e.target.value})} name='email'/>
            <br />
            <label htmlFor="email">Your message</label>
            <textarea className={styles._textarea} type="text" value={state.message} onChange={(e)=>setState({...state, message: e.target.value})} name='message' placeholder='I’m currently looking for a job. If you have an interesting project, a job or you just  like my portfolio, feel free to send me a message.'/>
            <br />
            <div className={styles.contact_button} onClick={()=>emailMe()}>Say Hello</div>
            </div>
            }
        </div>
    )
}
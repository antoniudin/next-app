import styles from '../styles/Home.module.sass'

export default function About() {
    return (
        <div className={styles.content}>
            <h2>Some things I’ve done</h2>
            <div className={styles.skill_title}>
            <div className={styles.owner}></div>
                <h4>Ownership</h4>
            </div>
            
                <p>
Designed, developed, and released a POS system app with 1000+ downloads on the Google Play Market and 120 paying customers. Android app with a web-based dashboard https://www.linxx.pro
<br />
Created processes for product feature prioritization and goal settings 
Implemented scrum processes for developers. <br />
Promoted the app, negotiated with customers and sales managers to increase sales
Wrote specifications for the app, work packages for developers, and user guides
</p>
<br />
<div className={styles.skill_title}>
            <div className={styles.manager}></div>
                <h4>Managment</h4>
            </div>
<p>
Led the team of support engineers. <br />
Installed, configured, maintained software and hardware. <br />
Trained staff to work with POS, coached newly-hired support specialists. <br />
Assisted clients with troubleshooting software and hardware issues.
</p>
        </div>
    )
  }
  
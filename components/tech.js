import styles from '../styles/Home.module.sass'
import Link from './link'

export default function Tech(props) {
    
  const things = props.things

  return (
    <div className={styles.techstack}>
      {things.map(thing=> 
        <div className={styles.techstack_item}>{thing}</div>
        )}
    </div>
  )
}

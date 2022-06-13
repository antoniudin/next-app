import styles from '../styles/Home.module.sass'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import { useEffect, useState, Fragment } from 'react'
import Work from '../components/work'
import Link from '../components/link'

export default function Home() {

  const colorSet=[
    ['#64403E', '#6C6061', '#838E83', '#B2BCAA'],
    ['#102E4A', '#55C1FF', '#5887FF', '#A682FF'],
    ['#FF7477', '#E69597', '#B5D6D6', '#6edddd'],
    ['#273B09', '#58641D', '#7B904B', '#DBD2E0'],
    ['#002400', '#273B09', '#58641D', '#7B904B'],
    ['#64403E', '#6C6061', '#838E83', '#B2BCAA'],
    ['#2D7DD2', '#EEB902', '#F45D01', '#474647']
  ]
  
  const phrases = [
    'Click me!', 'Click me again!', 'And again!', 'Cool, right? :)', 'One more time', 'Click me!'
  ]
  const [counter, setCounter] = useState(-1)

  const [tooltip, setTooltip] = useState(false)
  
  const [items, setItems] = useState([
    {id:0, name: 'About', wide: true},
    {id:1, name: 'Expirience', wide: false},
    {id:2, name: 'Work', wide: false},
    {id:3, name:'Contact', wide: false},
]) 
  const [colors, setColor] = useState(['#656565', '#808782', '#A6D3A0', '#D1FFD7'])
  
  const chaneColor = () => {
    const color = Math.floor(Math.random()*6)
    setColor(colorSet[color])    
    if (counter<5) setCounter(counter+1)
  }

  useEffect (()=> {
    chaneColor()
  },[])

  const wideProcessing = (id) => {
    const i = items.find(item=> item.id==id)
    i.wide = !i.wide
    setItems([...items].map(item=> {
      if (item.id === id) 
          return {
            ...item
          }
        else {
          item.wide=false;
          return item; 
        }
  }))
  }

  const getLayout = (id) => {
    switch (id) {
      case 0: return <About/>; break;
      case 1: return <Skills/>; break;
      case 2: return <Work/>; break;
      case 3: return <Contact/>; break;
    }
  }

  return (
    <Fragment>
    <div className={styles.container}>
      {items.map(entity=>
        <div 
        key={entity.id} 
        style={{backgroundColor: colors[entity.id]}} 
        className={`${entity.wide? styles.wide:styles.item}`} 
        onClick={()=>wideProcessing(entity.id)}>
        {!entity.wide? <div className={styles.title}>{<Link value={entity.name}/>}</div> : getLayout(entity.id)}
        </div>  
    )}
    </div>
    <div className={styles.colorReload} 
          onMouseOver={()=>setTooltip(true)} 
          onMouseOut={()=>setTooltip(false)} 
          onClick={()=>chaneColor()}>
    </div>
    <div className={styles.tooltip} style={{opacity: tooltip==true? null:'0'}}>{phrases[counter]}</div>
    </Fragment>
  )
}

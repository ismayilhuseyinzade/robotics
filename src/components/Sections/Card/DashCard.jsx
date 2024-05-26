import React from 'react'
import styles from './Card.module.scss'

const DashCard = ({item,remove}) => {
  return (
    <div className={styles.card}>
    <img src={item.thumbnail} alt="" />
    <h2>{item.title}</h2>
    <p>{item.category}</p>
    <span>{item.price}</span>
    <div className={styles.btn}>
        <button onClick={remove} className={styles.basket}> delete</button>
       
    </div>
  
</div>
  )
}

export default DashCard

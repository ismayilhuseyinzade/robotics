import React from 'react'
import styles from './Card.module.scss'
import { ImHeart } from "react-icons/im";

const Card = ({item,addtobasket,addtowish}) => {
  return (
    <div className={styles.card}>
        <img src={item.thumbnail} alt="" />
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <span>{item.price}</span>
        <div className={styles.btn}>
            <button onClick={addtobasket} className={styles.basket}> Add to basket</button>
            <button onClick={addtowish} className={styles.wish}><ImHeart className={styles.heart}/></button>
        </div>
      
    </div>
  )
}

export default Card

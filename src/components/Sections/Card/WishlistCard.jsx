import React from 'react'
import { MdDelete } from "react-icons/md";
import styles from './Card.module.scss'

const WishlistCard = ({ item, addtobasket, remove }) => {
  return (
    <div>
      <div className={styles.card}>
        <img src={item.thumbnail} alt="" />
        <h2>{item.title}</h2>
        <p>{item.category}</p>
        <span>{item.price}</span>
        <div className={styles.btn}>
          <button onClick={addtobasket} className={styles.basket}>Add To Basket</button>
          <button onClick={remove} className={styles.wish}><MdDelete className={styles.heart} /></button>
        </div>

      </div>
      
    </div>
  )
}

export default WishlistCard

import React from 'react'
import styles from './Card.module.scss'
import { ImHeart } from "react-icons/im";

const BasketCard = ({item,remove, addtowish}) => {
    return (
        <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <span>{item.price}</span>
            <div className={styles.btn}>
                <button onClick={remove} className={styles.basket}>Delete</button>
                <button onClick={addtowish} className={styles.wish}><ImHeart className={styles.heart} /></button>
            </div>

        </div>
    )
}

export default BasketCard

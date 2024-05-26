import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../components/Sections/Card/Card'
import Header from '../../components/Header/Header'
import WishlistCard from '../../components/Sections/Card/WishlistCard'
import styles from './Wishlist.module.scss'

const Wishlist = () => {

    const [data, setData]=useState([])

    const getData=()=>{
        axios.get('https://665080feec9b4a4a6032533f.mockapi.io/Wishlist')
        .then((res)=>
        setData(res.data)
        )

    }

    useEffect(()=>{
        getData()
    })

    const deleteData=(id)=>{
        axios.delete(`https://665080feec9b4a4a6032533f.mockapi.io/Wishlist/${id}`)
        setTimeout(()=>{
            getData()
        },200)
    } 

  return (
    <>
    <Header/>
    <div className={styles.wishlistt}>
    {data && data.map(item=><WishlistCard item={item} remove={()=>deleteData(item.id)} />)}
    </div>
   
    </>
  )
}

export default Wishlist

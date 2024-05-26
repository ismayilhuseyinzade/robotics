import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BasketCard from '../../components/Sections/Card/BasketCard'
import Header from '../../components/Header/Header'
import styles from './Basket.module.scss'


const Basket = () => {

   const [data, setData] = useState('')


   const getData = () => {
      axios.get('https://665080feec9b4a4a6032533f.mockapi.io/Basket')
         .then((res) =>
            setData(res.data)
         )
   }
   useEffect(() => {
      getData()
   })
   const deleteData = (id) => {
      axios.delete(`https://665080feec9b4a4a6032533f.mockapi.io/Basket/${id}`)
      setTimeout(() => {
         getData()

      }, 200)
   }


   return (

      <>
         <Header />
         <div className={styles.baskett}>
            {data && data.map(item => <BasketCard item={item} remove={() => deleteData(item.id)} />)}
         </div>
      </>

   )
}

export default Basket

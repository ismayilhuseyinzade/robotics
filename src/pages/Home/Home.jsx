import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import FifthSection from '../../components/Sections/FifthSection/FifthSection'
import FirstSection from '../../components/Sections/FirstSection/FirstSection'
import FourthSection from '../../components/Sections/FourthSection/FourthSection'
import ThirdSection from '../../components/Sections/ThirdSection/ThirdSection'
import Card from '../../components/Sections/Card/Card'
import axios from 'axios'
import styles from './Home.module.scss'

const Home = () => {
//apiden data getirdik//

  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://dummyjson.com/products?limit=9')
      .then(res => {
        setData(res.data.products)
      }
      )
  }
  useEffect(() => {
    getData()
  },[])
  console.log(data.map((item)=>(item)));

//bura qeder//


const addToBasket =(item)=>{
  axios.post('https://665080feec9b4a4a6032533f.mockapi.io/Basket',item)
}
const addToWish =(item)=>{
  axios.post('https://665080feec9b4a4a6032533f.mockapi.io/Wishlist',item)
}

  return (
    <div>
      <Header />
      <FirstSection />
      <div className={styles.cardBox} >
        {data && data.map(item => <Card item={item} addtobasket={()=>addToBasket(item)} addtowish={()=>addToWish(item)} />)}
      </div>        
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />

    </div>
  )
}

export default Home

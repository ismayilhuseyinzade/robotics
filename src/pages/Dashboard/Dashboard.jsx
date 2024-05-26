import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import DashCard from '../../components/Sections/Card/DashCard'
import { useFormik } from 'formik'
import styles from './Dashboard.module.scss'

const Dashboard = () => {


    const [data, setData] = useState([])
    const [search,setSearch]=useState('')
    

    const handleSearch=(e)=>{
    setSearch(e.target.value)
    }

    const filteredData=data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))

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

 const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      count: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post('https://665080feec9b4a4a6032533f.mockapi.io/Basket', values);
      setTimeout(() => {
        getData();
      }, 1000);
    },
  });

  return (
    <>
        <Header/>
        <div className={styles.searchBox}>
        <h5>Mehsulu axtar:</h5>
        <input  
                type="text"
                placeholder='search '
                value={search}
                onChange={handleSearch}
            />
      </div>
        <div className={styles.formBox}>
        <h5>Mehsul elave et:</h5>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input className={styles.inp}
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input className={styles.inp}
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input className={styles.inp}
            name="count"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <input className={styles.inp}
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">
            Submit</button>
        </form>
      </div>
      <div>
      { filteredData.map(item => <DashCard item={item} remove={() => deleteData(item.id)} />)}
      </div>
    </>
  )
}

export default Dashboard

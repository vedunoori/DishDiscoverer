import { useEffect, useState } from 'react'
import { Spin } from 'antd';

import FoodBox from '../../components/FoodBox'
import "./Menu.css"

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [isLoader,setLoader] = useState(false);


  const displayFood = async () => {
    setLoader(true)
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    setLoader(false);
    setCategories(data.categories)
  }
  useEffect(() => {
    displayFood()
  }, [])

  return (
    <section id='menu'>
       {isLoader &&<div className='loader'><Spin /></div>}
        <div id='categoryContainer'>
        
        {
          categories.map((category)=>{
            return <FoodBox key={category.idCategory} category={category}/>
          })
        }
      </div>
    </section>
  )
}

export default Menu
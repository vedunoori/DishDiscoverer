import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealBox from '../../components/MealBox'
import "./Category.css"
import { Spin } from 'antd'
const Category = () => {
    const [meals, setMeals] = useState([])
    const [isLoader,setLoader] = useState(false);

    const { category } = useParams()
    useEffect(() => {
        displayCategory()
    }, [])

    const displayCategory = async () => {
        setLoader(true);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await res.json()
        setMeals(data.meals)
        setLoader(false);
    }
    return (
        <section id='meals'>
            {isLoader &&<div className='loader'><Spin /></div>}
            <h2>{category}</h2>
            <div id='mealContainer'>
                {
                    meals.map((meal) => {
                        return <MealBox key={meal.idMeal} meal={meal} />
                    })
                }
            </div>

        </section>
    )
}

export default Category
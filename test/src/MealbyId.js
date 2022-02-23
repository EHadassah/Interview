import React, { useState, useEffect } from 'react';
import axios from 'axios'
const MealbyId = () => {
    const [data, setData] = useState([]);
    const get = async () => {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
            console.log(res.data.meals)
            setData(res.data.meals)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <>  
            <div>
                {
                    data.map((i)=>(
                        <h3 key={i.idMeal}>{i.idMeal} {i.strMeal} {i.strCategory} {i.strArea}</h3>
                        
                    ))
                }
            </div>
        </>
    )
}
export default MealbyId;
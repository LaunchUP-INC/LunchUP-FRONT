import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Card = () =>{
    const [objeto, setObjeto] = useState({});

 useEffect(() => {
    const fetchRecibeData = async () => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/716429/information?apiKey=5c8d4df2c99a46b5bcdf4a9d604bc6d9&includeNutrition=true.`
            )
            let {id, title, image} = response.data;
            setObjeto({
                id,
                title,
                image
            })
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchRecibeData()
 }, []) ; 


    return (
        <div>
            <label>ID: {objeto.id}</label>
            <h3>{objeto.title}</h3>
            <img src={objeto.image}/>
        </div>
    )
}


export default Card;
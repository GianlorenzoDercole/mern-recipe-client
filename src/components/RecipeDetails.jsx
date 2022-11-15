import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
export default function RecipeDetails({ recipe }) {
    const [ingredients, setIngredients] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)

                console.log(response.data.ingredients)
                setIngredients(response.data.ingredients)
            } catch (err) {
                console.log(err)
            }

        }
        fetchIngredients()
    }, [])

    // const ingredientLinks = ingredients.map((ingredient, idx) => {
    //     return (
    //         <div key={`ingredients${idx}`}>
    //             <h1>{recipe.ingredient}</h1>
    //         </div>
    //     )
    // })




    const ingredientLinks = ingredients.map((ingredient, idx) => {
        return (
            <div key={`ingredients${idx}`}>
                <h1>{ingredient.ingredient}</h1>
                <h1>{ingredient.amount}</h1>
            </div>
        )
    })

    console.log(ingredientLinks)
    return (
        <div>
            <h1>{recipe.recipe}</h1>
            <h1>{recipe.instructions}</h1>
            {/* <h1>{recipe.ingredients[0]}</h1> */}
            {ingredientLinks}

        </div>
    )
}
//////////////////////////////////

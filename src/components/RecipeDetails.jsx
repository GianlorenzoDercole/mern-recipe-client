import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
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
    }, [id])

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
                <div>
                    <h3>{ingredient.ingredient}: {ingredient.amount}</h3>

                </div>

            </div>
        )
    })

    console.log(ingredientLinks)
    return (
        <div>
            <h1>{recipe.recipe}</h1>
            <h2>instructions: {recipe.instructions}</h2>
            <h2>Ingredients</h2>
            {/* <h1>{recipe.ingredients[0]}</h1> */}
            {ingredientLinks}

        </div>
    )
}
//////////////////////////////////

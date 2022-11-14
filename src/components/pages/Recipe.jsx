import RecipeDetails from '../RecipeDetails'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Recipe() {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    const [ingredient, setIngredient] = useState({
        ingredient: '',
        amount: 5
    })



    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)

            .then(response => {
                setRecipe(response.data)
            })

        }, [id])


        console.log(ingredient)

        // const handleSubmit = async (e, ingredient, setIngredient) => {
        //     e.preventDefault()
        //     try {
        //         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/recipes`, form)

        //         setRecipes([...recipes, response.data])

        //         setForm({
        //             recipe: '',
        //             ingredients:[],
        //             instructions: ''
        //         })
        //     } catch (err) {
        //         console.log(err)
        //     }

        // }
    return (

        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor='ingredient' className='inputLabel'> new ingredient </label>
                <input
                    type='text'
                    id='ingredient'
                    value={ingredient.ingredient}
                    onChange={e => setIngredient({...ingredient, ingredient:e.target.value})}
                />
                <div>
                    <button type='submit'>update</button>
                </div>
            </form>
             <RecipeDetails recipe={recipe}/>
             <h1>{ingredient.ingredient}</h1>
        </div>
    )
}

import RecipeDetails from '../RecipeDetails'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
export default function Recipe() {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const [newIngredient, setNewIngredient] = useState({
        ingredient: '',
        amount: 5
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)

            .then(response => {
                setRecipe(response.data)
            })

        }, [id])


        console.log(newIngredient)
        console.log('HERE',recipe.ingredients)

        const handleIngredientSubmit =  async (e, newIngredient, recipe) => {
            e.preventDefault()
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
                console.log('RESPONSE', response.data.ingredients)
                response.data.ingredients.push(newIngredient)
                console.log('OOOOOOOO', response.data.ingredients)
                const hi = response.data
                await axios.put(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`, hi)
                // .then(response => {
                //     // setNewIngredient({
                //     //     ingredient: '',
                //     //     amount: 5
                //     // })
                //     // navigate(`/recipes/${id}`)
                // })



            } catch (err) {
                console.log(err)
            }
            // recipe.ingredients.push(newIngredient)

        }
    return (

        <div>
            <form onSubmit={e => handleIngredientSubmit(e, newIngredient)}>
                <label htmlFor='ingredient' className='inputLabel'> new ingredient </label>
                <input
                    type='text'
                    id='ingredient'
                    value={newIngredient.ingredient}
                    onChange={e => setNewIngredient({...newIngredient, ingredient:e.target.value})}
                />
                <label htmlFor='amount' className='inputLabel'> new ingredient </label>
                <input
                    type='number'
                    id='amount'
                    value={newIngredient.amount}
                    onChange={e => setNewIngredient({...newIngredient, amount:e.target.value})}
                />
                <div>
                    <button type='submit'>update</button>
                </div>
            </form>
             <RecipeDetails recipe={recipe}/>
             {/* <h1>{newIngredient.ingredient}</h1>
             <h1>{newIngredient.amount}</h1> */}

        </div>
    )
}

import RecipeDetails from '../RecipeDetails'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import IngredientCreateForm from '../IngredientCreateForm'
export default function Recipe() {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    // const [newIngredient, setNewIngredient] = useState({
    //     ingredient: '',
    //     amount: 5
    // })
    useEffect(() => {


        const fetchIngredients = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
                setRecipe(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchIngredients()
    }, [id] )


        const handleIngredientSubmit =  async (e, newIngredient, setNewIngredient) => {
            e.preventDefault()
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
                console.log('RESPONSE', response.data.ingredients)
                response.data.ingredients.push(newIngredient)

                const updatedRecipe = response.data

                await axios.put(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`, updatedRecipe)

                const updatedResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)

                setRecipe({recipe: recipe.recipe, instructions: recipe.instructions, ingredients: updatedResponse.data.ingredients })

                console.log('HERE',recipe)
                setNewIngredient({ingredient: '',
                amount: 5})

            } catch (err) {
                console.log(err)
            }
            // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
            // response.data.ingredients.push(newIngredient)
            // const updatedRecipe = response.data
            // console.log('HERE', updatedRecipe)
            // setRecipe({ingredients: updatedRecipe.ingredients})
            // console.log('OOOOO', recipe)
            // axios.put(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`, updatedRecipe)
            //     .then(response => {

            //         setRecipe(response.data)

            //     })
        }

        const handleDelete = () => {
            axios.delete(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
                .then(response => {
                    // navigate away from this page
                    navigate('/')
                })
                .catch(console.warn)
        }

    return (

        <div>
            {/* <form onSubmit={e => handleIngredientSubmit(e, newIngredient)}>
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
                    <button onClick={() => setShowForm(!showForm)} type='submit'>update</button>
                </div>

            </form> */}

            <IngredientCreateForm submitHandler={handleIngredientSubmit}/>
            <button onClick={handleDelete}>delete</button>

             <RecipeDetails recipe={recipe}/>

        </div>
    )

}




/////////////////////////////////////

// ///////////////////////////////////

import RecipeDetails from '../RecipeDetails'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Recipe() {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()

        useEffect(() => {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)

                .then(response => {
                    setRecipe(response.data)
                })



        }, [id])
    return (
        <div>
            { <RecipeDetails recipe={recipe}/> }
        </div>
    )
}

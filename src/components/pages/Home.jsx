import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
    console.log('my server: ', process.env.REACT_APP_SERVER_URL)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes`)

                console.log(response.data)
                setRecipes(response.data)
            } catch (err) {
                console.log(err)
            }

        }
        fetchRecipes()
    }, [])  // get recipes when page loads

    const recipeLinks = recipes.map((recipe, idx) => {
        return (
            <div key={`recipelinks${idx}`}>
                <Link to={`/recipes/${recipe._id}`}>{recipe.recipe}</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>app</h1>
            {recipeLinks}
        </div>
    )
}

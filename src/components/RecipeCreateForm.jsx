import { useState } from 'react'
export default function RecipeForm({submitHandler, initialForm}) {
    const [form, setForm] = useState(initialForm)
    return (
        <form onSubmit={e => submitHandler(e, form, setForm)}>

            <label htmlFor='recipe' className='inputLabel'> recipe </label>
            <input
                type='text'
                id='recipe'
                value={form.recipe}
                onChange={e => setForm({...form, recipe: e.target.value})
                }
            />









            <label htmlFor='ingredients' className='inputLabel'> ingredients </label>
            <input
                type='text'
                id='ingredients'
                value={form.ingredients}
                onChange={e => setForm({...form, ingredients: e.target.value})
                }
            />

            <label htmlFor='instructions' className='inputLabel'> instructions </label>
            <input
                type='text'
                id='instructions'
                value={form.instructions}
                onChange={e => setForm({...form, instructions: e.target.value})
                }
            />
            <div>
                <button type='submit'>update</button>
            </div>
        </form>
    )
}

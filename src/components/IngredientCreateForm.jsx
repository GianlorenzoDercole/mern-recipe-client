// import { useState } from 'react'


// export default function IngredientCreateForm({submitHandler}) {
//     const [newIngredient, setNewIngredient] = useState({
//         ingredient: '',
//         amount: 5
//     })
//     return (
//         <form onSubmit={e => submitHandler(e, newIngredient)}>
//         <label htmlFor='ingredient' className='inputLabel'> new ingredient </label>
//         <input
//             type='text'
//             id='ingredient'
//             value={newIngredient.ingredient}
//             onChange={e => setNewIngredient({...newIngredient, ingredient:e.target.value})}
//         />
//         <label htmlFor='amount' className='inputLabel'> new ingredient </label>
//         <input
//             type='number'
//             id='amount'
//             value={newIngredient.amount}
//             onChange={e => setNewIngredient({...newIngredient, amount:e.target.value})}
//         />
//         <div>
//             <button type='submit'>update</button>
//         </div>
//     </form>
//     )

// }

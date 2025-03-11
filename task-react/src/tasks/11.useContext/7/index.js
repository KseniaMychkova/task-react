import { useContext, useState } from 'react'
import { CartContext } from '../../../Context'

function UseContext7() {
    const card = useContext(CartContext)
    const [inp, setInp] = useState('')
    
    function addToList() {
        card.changeList([...card.list, inp])
    }

    function removeListItem (e){
        e.target.style.textDecoration === 'none' ? e.target.style = 'text-decoration: line-through' : e.target.style = 'text-decoration: none'
        
    }

    return (
        <div>
            <p>Создай небольшое приложение, где пользователь может добавлять товары в корзину. Контекст используется для хранения и управления списком товаров в корзине.

                Создать CartContext с:

                массивом товаров в корзине
                функцией добавления товара
                функцией удаления товара</p>
            <div>
                <ul onClick={removeListItem}>
                    {card.list.map((el, id) => <li style={{textDecoration: 'none'}} key={id}>{el}</li>)}
                    
                </ul>
            </div>
            <input onChange={(e) => setInp(e.target.value)}></input>
            <button onClick={addToList}>Add to List</button>
        </div>
    )
}

export default UseContext7
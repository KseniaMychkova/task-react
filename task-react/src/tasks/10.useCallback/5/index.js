import {useState, useCallback} from 'react'


function UseCallback5() {
    const [inp, setInp] = useState('')
    const [list, setList] = useState(['Зарядка', 'Завтрак', 'Дети', 'Учеба'])
    
    const deleteLi = useCallback((e) => {
        setList(list.filter(el => el !== e.target.id)) 
    }, [list.length])
    
    const addTask = useCallback(()=>{
        setList([...list, inp])
    }, [list.length, inp])

    return (
        <div>
            <p>Создайте компонент, который позволяет пользователю добавлять и удалять элементы из списка. Используйте useCallback, чтобы оптимизировать функции добавленияиудаленияэлементов.</p>
            <input onChange={(e)=> setInp(e.target.value)}></input>
            <button onClick={addTask}>Click</button>
            <div>
                <ol>
                    {list.map((el, i) => <li key={i}>{el}<button id={el} onClick={deleteLi}>del</button></li>)}
                </ol>
            </div>
        </div>
    )
}

export default UseCallback5

import { useCallback, useState } from "react"
function UseCallback1() {
    const [list, setList] = useState(['Зарядка', 'Завтрак', 'Дети', 'Учеба'])
    const deleteLi = useCallback((e) => {
        setList(list.filter(el => el !== e.target.id)) 
    }, [list.length])
    
    return (
        <div>
            <p>Создайте компонент, который отображает список элементов с кнопками "Удалить". При нажатии на кнопку элемент должен быть удален из списка. Используйте use Callback, чтобы оптимизировать функцию удаления элемента.</p>
            <div>
                <ol>
                    {list.map(el => <li>{el}<button id={el} onClick={deleteLi}>del</button></li>)}
                </ol>
            </div>


        </div>
    )
}

export default UseCallback1

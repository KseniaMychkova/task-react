import { useState } from 'react';

function UseState14() {
    const [inp, setInp] = useState('');

    const [tasks, setTasks] = useState(['Проснуться', 'Умыться', 'Позавтракать', 'Отвезти детей в сад'])

    const [styleInp, setStyleInp] = useState('black')

    const add = () => {
        try {
            if (!inp) throw new Error('error') 
            setTasks([...tasks, inp])
            setInp('')
            setStyleInp('black')
        } catch (error) {
            setStyleInp('red')
        }
    }

    const remove = (e) => {
        const filt = tasks.filter(el => el !== e.target.id)
        setTasks(filt)

    }
    return (
        <div>
            <p>Список задач с использованием useState: Создайте компонент списка задач,
                который позволяет пользователю добавлять и удалять задачи из списка.</p>
            <div>
                <h1>Список задач</h1>
                <ol>
                    {tasks.map(el => <li>{el}<button id={el} onClick={remove}>del</button></li>)}
                </ol>
                <input style={{borderColor: styleInp}} value={inp} onChange={(e) => setInp(e.target.value)} placeholder='Введите задачу'></input>
                <button onClick={add}>Нажми, чтобы добавить задачу</button>
            </div>

        </div>
    )
}

export default UseState14
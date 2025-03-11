import { useReducer } from 'react'

function reducerInp(inp, param) {
    switch (param.action) {
        case 'saveInp':
            return param.value;
        default:
            return;
    }
}

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }];
        case 'REMOVE_TODO':
            return state.filter((_, index) => index !== action.index);
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return;
    }
}

function UseReducer10() {
    const [tasks, dispatch] = useReducer(todoReducer, [
        { text: 'Откликнуться на вакансии', completed: false },
        { text: 'Решить задачи', completed: false },
        { text: 'Пройти тестовое задание', completed: false },
        { text: 'Повторить useReducer', completed: false }
    ])
    const [inp, setInp] = useReducer(reducerInp, '')

    function addTask() {
        dispatch({ type: 'ADD_TODO', text: inp })
        setInp({ action: 'saveInp', value: '' })
    }

    function removeTask(index) {
        dispatch({ type: 'REMOVE_TODO', index })
    }

    function toggleTask(index) {
        dispatch({ type: 'TOGGLE_TODO', index })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>Сделай простое приложение "Список дел", где можно:
                - добавлять задачи
                - удалять задачи
                - отмечать задачи как выполненные/невыполненные

                Что нужно реализовать:
                1.Редьюсер todoReducer, который обрабатывает:
                ADD_TODO — добавляет новую задачу
                REMOVE_TODO — удаляет задачу
                TOGGLE_TODO — меняет статус "выполнено / не выполнено"
                2. Инпут и кнопка "Добавить" для новой задачи
                3. Список задач, где каждая:
                - имеет текст
                - отображается как выполненная/невыполненная (например, через зачёркивание)
                - имеет кнопку "Удалить"</p>

            <div>
                <h1>Список дел</h1>
                <ul>
                    {tasks.map((el, index) => <div key={index} style={{ display: 'flex', gap: '10px', }}>
                        <li onClick={()=>{toggleTask(index)}} style={{ textDecoration: el.completed ? 'line-through' : 'none', cursor: 'pointer' }} >{el.text}</li>
                        <button onClick={() => {  removeTask(index) }}>del</button>
                        </div>)}
                </ul>
                <input value={inp} onChange={(e) => setInp({ action: 'saveInp', value: e.target.value })}></input>
                <button onClick={addTask}>Добавить задачу</button>
            </div>
        </div>
    )
}

export default UseReducer10
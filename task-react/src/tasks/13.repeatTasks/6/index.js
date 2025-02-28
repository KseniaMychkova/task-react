import { useReducer } from 'react'

function getInpValue(inp, param) {
    switch (param.action) {
        case ('saveInpValue'):
            return param.value;
        default:
            return;
    }
}

function changeListOfTasks(tasksArr, action) {
    switch (action.type) {
        case ('add'):
            return [...tasksArr, action.task];
        case ('remove'):
            return tasksArr.filter((el, i)=> i !== action.i);
        default:
            return;
    }
}

function RepeatTasks6() {
    const [inp, setInp] = useReducer(getInpValue, '')
    const [tasksArr, setTasksArr] = useReducer(changeListOfTasks, ['Повторить теорию', 'Решить задачи', 'Сделать тестовое задание', 'Изучить макет'])

    function addTask() {
        setTasksArr({ type: 'add', task: inp });
        setInp({ action: 'saveInpValue', value: '' })
    }

    function removeTask(i) {
        setTasksArr({
            type: 'remove', i
        })
    }

    return (
        <div>
            <p>Список задач с использованием useReducer: Создайте компонент списка задач, который позволяет пользователю добавлять и удалять задачи из списка.</p>
            <input value={inp} onChange={(e) => setInp({ action: 'saveInpValue', value: e.target.value })} placeholder='Опиши задачу'></input>
            <button onClick={addTask}>Добавить</button>
            <div>
                <ol>
                    {tasksArr.map((el, i) => <li key={i}>{el}<button id={el} onClick={() => removeTask(i)}>del</button></li>)}
                </ol>
            </div>
        </div>
    )
}

export default RepeatTasks6
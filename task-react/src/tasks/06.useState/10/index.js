import {useState} from 'react'

function UseState10 (){
    const [form, setForm] = useState({
        name: '',
        surname: ''
    })

    function saveInp1 (e){
        setForm(prevForm => ({ 
           ...prevForm, name:e.target.value
        }))
    }
    function saveInp2 (e){
        setForm(prevForm => ({ 
           ...prevForm, surname:e.target.value
        }))
    }

    function test (){
        try {
            if(form.name === '') throw new Error('Вы не ввели имя');
            if(form.surname === '') throw new Error('Вы не ввели фамилию');
            else console.log('success');
            
        } catch (error) {
            console.log(error);           
        }              
    }
    return (
        <div>
            <p>По клику на кнопку собрать данные из двух input: name, surname. Работать с 1 state, первоначальное значение которого name: ‘’, surname: ‘’. Проверить значения 2 input на пустоту. Структура state:</p>
            <input type='text' onChange={saveInp1}></input>
            <input type='text' onChange={saveInp2}></input>
            <button onClick={test}>click</button>
        </div>
    )
}

export default UseState10
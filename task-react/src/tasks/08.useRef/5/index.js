import { useRef } from 'react'

function UseRef5() {
const count = useRef(0)
function mult (){
    
    console.log(count.current += 1);
    
}
    return (
        <div>
            <p>Реализуйте компонент, который отслеживает количество кликов на кнопку с помощьюuseRefивыводитэточисловконсольприкаждомклике.</p>
            <button onClick={mult}>Click</button>
        </div>
    )
}

export default UseRef5

import { useState } from 'react'

function UseState18() {
    const [flag, setFlag] = useState(false)

    function showMenu() {
        setFlag(!flag)
    }

    return (
        <div>
            <p>Отображение навигации с использованием useState: По нажатиюна кнопку “бургер” отображать блок навигации из 4параграфов.</p>
            <button onClick={showMenu}>Бургер</button>
            {flag ? <div>
                <p>1 параграф</p>
                <p>2 параграф</p>
                <p>3 параграф</p>
                <p>4 параграф</p>
            </div> : null}

        </div>
    )
}

export default UseState18
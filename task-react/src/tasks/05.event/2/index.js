function Event2 () {
    function show (event) {
        console.log(event.target.value);
        
    }
    return (
        <div>
            <p>Пособытиюизмененияinput отображатьвконсолькаждоевводимоезначение</p>
            <input onChange={show}></input>
        </div>
    )
}

export default Event2
import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0)
    function increaseCount(){
setCount(count+1)
    }
    function decreaseCount(){
         setCount(count-1)
    }
            function resetCount(){
                setCount(0)
                    }
return(
    <div className="count-div">
        <h1 className="counter-h1">Lets count</h1>
        <h1 className="counter-h11">{count}</h1>
        <div className="counter-button">
        <button className="increase-button" onClick={increaseCount}>Increase</button>
        <button className="decrease-button" onClick={decreaseCount}>Decrease</button>
        <button className="reset-button" onClick={resetCount}>Reset</button>
        </div>

    
    </div>
)
}

export default Counter
import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <>
        <p> Counter Current Value : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )

}

export default Counter;
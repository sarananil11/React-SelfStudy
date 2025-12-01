import React, { useReducer } from 'react'
const initialState = 0;
function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":

            return state + 1;
        case "DECREMENT":
            return state - 1;

        case "RESET":
            return 0;
        default:
            return state;
    }
}
function Counter() {

    const [count, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div>
            <h2>Count: {count} </h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}

export default Counter;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/action'

function Counter() {
    const counter = useSelector(state => state.counter)
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>COUNTER {counter}</h1>
            <button onClick={() => dispatch(increment()) }> + </button>
            <button onClick={() => dispatch(decrement()) }> - </button> 
            { 
                isLogin && <p>You Can see</p>
            }
        </div>
    )
}

export default Counter
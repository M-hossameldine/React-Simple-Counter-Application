import React, {useState, useContext} from 'react';
import {ThemeContext} from './App'
/*
export default function CounterHooks({initialCount}) {

  const [state, setState] = useState({count: initialCount});

  return (
    <>
    <h3>Counter Hooks!</h3>
    <button onClick={() => setState(prevState => {
      return {count: prevState.count - 1}
    })}> - </button>
    <span>{state.count}</span>
    <button onClick={() => setState( prevState => {
      return {count: prevState.count + 1}
    })}> + </button>
    </>
  )
}
*/

export default function CounterHooks({initialCount}) {
  const [count, changeCount] = useState(initialCount);
  const style = useContext(ThemeContext)
  return (
    <>
    <h3> Counter Hooks</h3>
    {/* <button onClick={() => changeCount(count - 1)}>-</button> */}
    <button style={style} onClick={() => changeCount(prevCount => prevCount - 1)}>-</button>
    <span>{count}</span>
    <button style={style} onClick={() => changeCount(count + 1)}>+</button>
    </>
  )

}
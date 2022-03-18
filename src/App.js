import React, { useReducer } from 'react';


const initialState = 0;


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1

    case "decrement":
      return state - 1

  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {state}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

    </div>
  );
}

export default App;

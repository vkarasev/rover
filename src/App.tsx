import React, { useReducer } from 'react';
import './App.css';
import { Control, Field } from './components';
import { initialState } from './constants/initialState';
import { reducer } from './constants/reducer';
import { ControlContext, DispatchContext } from './context/';


function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <ControlContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <Field />
          <Control/>
        </div>
      </DispatchContext.Provider>
    </ControlContext.Provider>
  );
}

export default App;

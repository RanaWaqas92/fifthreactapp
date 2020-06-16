import React, { useContext,useReducer } from 'react';
import CounterContxt from './CounterContxt';
import AssignRedsr from './AssignRedsr';

const ChildComp = () => {
let Counter = useContext(CounterContxt)
let [Redsr,SetRedsr] = useReducer(AssignRedsr,0)
    return (
        <div>
            <label>Counter With Reducer OnChild = {Redsr}</label>
            <br />            
            <input type="submit" onClick={() => {Counter[1](++Counter[0])}} value="Counter With Context"  />
            <br />            
            <button onClick={() => {SetRedsr('Inc')}}>+</button>
            <button onClick={() => {SetRedsr('Dec')}}>-</button>
        </div>
    );
}

export default ChildComp;
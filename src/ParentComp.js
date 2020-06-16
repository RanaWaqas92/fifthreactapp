import React, {useContext} from 'react';
import ChildComp from './ChildComp'
import CounterContxt from './CounterContxt';



const ParentComp = () => {
    let Counter = useContext(CounterContxt)
    
    return (
                <div>
                    <label>Counter With Countext OnParent = {Counter[0]}</label>
                    <ChildComp></ChildComp>
                </div>
    );
}

export default ParentComp;
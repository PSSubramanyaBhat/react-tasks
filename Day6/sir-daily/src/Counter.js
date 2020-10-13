import './Counter.css';

import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Counter = ({ counterBase, upperLimit, lowerLimit }) => {
    // const Counter = () => {


    let [count, setCount] = useState(0);
    let [multiplier, setMultiplier] = useState(Number(counterBase));
    // let [multiplier, setMultiplier] = useState(Number(Counter.PropTypes.counterBase));
// 
    return (
        <div className="Counter">
            <button
                onClick={() => {
                    if (count * multiplier > Number(lowerLimit)) {
                        count = count - 1;
                    } else {
                        console.log("Lower Limit Exceeded... (Lower Limit is 0)");
                    }
                    // count = count - 1;
                    console.log('- clicked' + count);
                    setCount(count);
                }}
            >
                -
            </button>
            <div className="Label">{count * multiplier}</div>
            <button
                onClick={() => {
                    if (count * multiplier < Number(upperLimit)) {
                        count = count + 1;
                    } else {
                        console.log("Upper Limit Exceeded... (Upper Limit is 1000)");
                    }
                    // count = count + 1;
                    console.log('+ clicked', count);
                    setCount(count);
                }}
            >
                +
            </button>
            <div className="Multipler">
                <label htmlFor="multiplier">Multiplier</label>
                <input
                    onChange={(event) => {
                        console.dir(event.target.value);
                        setMultiplier(Number(event.target.value));
                    }}
                    type="text"
                    id="multiplier"
                    name="multiplier"
                    defaultValue={multiplier}
                />
            </div>
        </div>
    );
};

// Counter.propTypes = {
//     counterBaseProp:PropTypes.counterBase,
//     lowerLimitProp: PropTypes.lowerLimit,
//     upperLimitProp: PropTypes.upperLimit,
// }

/*instead of writing like this and then using reactDOM.render()...   
we export it to different module and then use this class/vinding there*/

// const propElement = (
//     <div>
//         <Counter upperLimit = {1000} lowerLimit = {0} counterBase = {2}/>
//     </div>
// );

export default Counter;
// export default propElement;

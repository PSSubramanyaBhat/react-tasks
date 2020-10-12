import './App.css';

import Counter from './Counter';
import RegistrationSamplePage from './RegistrationSamplePage';

import React from 'react';

function App() {
    return (
        // <div className="App">
        //     {/* <Counter /> */}
        //     <Counter upperLimit = {10} lowerLimit = {0} counterBase = {2}/>
        // </div>

        <div className="App">
            <RegistrationSamplePage></RegistrationSamplePage>
        </div>
    );
}

export default App;

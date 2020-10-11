import './App.css';

import Box from './Box';
import React from 'react';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <Box className="ThickBorder" style={{ color: 'blue' }}>
                <div>
                    {/*This code is to Have Nested Boxes*/}
                    {/* <Box className="InnerBox" style={{ color: 'blue' }}>
                        
                    </Box> */}

                    {/*This code is to Havea circle inside Boxe*/}
                    <Box rounded className="InnerBox" style={{ color: 'blue' }}>
                        
                    </Box>
                </div>
            </Box>

            <Box className="Box2" style={{ color: 'blue' }}>
                <div>
                    {/*This code is to Have Nested Boxes*/}
                    {/* <Box className="InnerBox" style={{ color: 'blue' }}>
                        
                    </Box> */}

                    {/*This code is to Havea circle inside Boxe*/}
                    <Box className="InnerBox" style={{ color: 'blue' }}>
                        
                    </Box>
                </div>
            </Box>

            <Box className="DashedBox" style={{ color: 'blue' }}>
                
            </Box>
        </div>
    );
}

export default App;

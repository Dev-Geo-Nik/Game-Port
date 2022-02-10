import React ,{useContext} from 'react';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom';

import {Home} from "./routes";



function App() {
console.log("loading")
  return (
    <main>
       
          <Router>     
            <Routes >
                <Route   path="/"  element={<Home/>} />           
            </Routes>
          </Router>
        
    </main>
    
  );
}

export default App;

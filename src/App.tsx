import React ,{useContext} from 'react';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import SingleGame from './components/SingleGame/SingleGame';

import {Games, Home} from "./routes";



function App() {
console.log("loading")
  return (
    <main>
       
          <Router>     
            <Routes >
                <Route   path="/"  element={<Home/>} />           
                <Route   path="/games"  element={<Games/>} />           
                <Route  path="/game/:id"  element={<SingleGame/>}/>      
            </Routes>
          </Router>
        
    </main>
    
  );
}

export default App;

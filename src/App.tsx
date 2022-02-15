import React  from 'react';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import {Games, Home ,Game} from "./routes";




function App() {
console.log("loading")
  return (
    <main>
       
          <Router>     
            <Routes >
                <Route   path="/"  element={<Home/>} />           
                <Route   path="/games"  element={<Games/>} />           
                <Route  path="/game/:id"  element={<Game/>}/>      
                {/* <Route  path="/game/id?=id"  element={<SingleGame/>}/>       */}
            </Routes>
          </Router>
        
    </main>
    
  );
}

export default App;

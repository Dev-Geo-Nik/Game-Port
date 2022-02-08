import React ,{useContext} from 'react';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import { GamesContext } from './context/Games/GameContext';

import {Home} from "./routes";



function App() {
  const {state,dispatch} = useContext(GamesContext);
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

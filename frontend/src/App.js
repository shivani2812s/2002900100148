import React from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Trains from './Trains';
import Mytrain from './Mytrain';
function App() {
  return (
   <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Trains></Trains>}></Route>
  <Route path='/mytrain' element={<Mytrain></Mytrain>}></Route>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
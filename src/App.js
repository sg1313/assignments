import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Category from './components/Category';
import Join from './components/Join';

const App = () => {


      return (
            <div>
                  <div>
                  <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/:id' element={<Category/>}/>
                        <Route path='/join' element={<Join/>}/>
                  </Routes>
                  </div>
                  
            </div>
      )
};

export default App;
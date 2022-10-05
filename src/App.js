import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
// import Profile from './components/Profile';
// import { useState } from 'react';
// import {GrApps} from 'react-icons/gr';
// import List from './components/List';
import Category from './components/Category';


const App = () => {

      // const [hover, setHover] = useState(false);

      // const onMouseEnter = () => {
      //       console.log('마우스 올라갔다');
      //       setHover(true);
  
      // };
  
      // const onMouseLeave = () => {
      //       setHover(false);
  
      //       console.log('   떨어짐')
      
      // }

      return (
            <div>
                  {/* <div className={GrApps} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <GrApps/>
                        {hover ? <List/> : null}
                  </div> */}
                  <div>
                  <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/:id' element={<Category/>}/>
                  </Routes>
                  </div>
                  
            </div>
      )
};

export default App;
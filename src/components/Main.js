import React from 'react';
import Login from './Login';
import List from './List';
import { useState } from 'react';
import {GrApps} from 'react-icons/gr';


const Main = () => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
          console.log('마우스 올라갔다');
          setHover(true);

    };

    const onMouseLeave = () => {
          setHover(false);
          console.log('   떨어짐')
    
    }

  return (
    <div>
      <h1>테스트 ㅇㄹㄴㄹ</h1>
      <hr/>
        <div className={GrApps} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <GrApps/>
        {hover && <List/> }

        </div>
        <div>
            <p>123</p>
            <Login/>
        </div>
    </div>
  );
};

export default Main;
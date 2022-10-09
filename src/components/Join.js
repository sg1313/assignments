import React, { useState } from 'react';
import './List.css';
import {Link, Navigate, useNavigate} from 'react-router-dom';

const Join = () => {

    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');

    const onUseridHandler = (e) => {
        setUserid(e.currentTarget.value);
        console.log('userid찍히나',setUserid);
        localStorage.setItem('userid', e.currentTarget.value);
        
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
        console.log('비번찍히나',setPassword);
        localStorage.setItem('password', e.currentTarget.value);
        
    };
    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
        console.log('이름찍히나',setUsername);
        localStorage.setItem('username', e.currentTarget.value);

    };
    const onBirthHandler = (e) => {
        setBirth(e.currentTarget.value);
        console.log('생일찎히나',setBirth);
        localStorage.setItem('birth', e.currentTarget.value);
    };

    return (
        <div>
                <div className='login'>
                    <form>
                아이디 : <input type='text' name='userid' key={'userid'} onChange={onUseridHandler}/> <br/>
                비밀번호 : <input type='password' name='password' onChange={onPasswordHandler}/> <br/>
                이름 : <input type='text' name='username' onChange={onUsernameHandler}/> <br/>
                생년월일 : <input type='date' name='birth' onChange={onBirthHandler}/> <br/>
                <Link to='/'><button type='submit'>작성완료</button></Link> <button>작성취소</button>
           </form>
            </div>
                <Link to='/'>메인</Link>

        </div>
    );
};

export default Join;
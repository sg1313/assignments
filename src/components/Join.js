import React, { useState } from 'react';
import './List.css';
import {Link, Navigate, useNavigate } from 'react-router-dom';

const Join = () => {

    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');

    const Navigate = useNavigate();

    const onUseridHandler = (e) => {
        setUserid(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    
    };
    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    };

    const onBirthHandler = (e) => {
        setBirth(e.currentTarget.value);
    };

    const onClickHandler = (e) => {
        localStorage.setItem('userid', userid);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('birth', birth);
        alert('패스워드' + userid + password + username + birth);
        Navigate('/');
    }


    return (
        <div>
            <form>
                <div className='login'>
                아이디 : <input type='text' name='userid' value={userid} 
                onChange={onUseridHandler}/> <br/>
                비밀번호 : <input type='password' name='password' value={password} 
                onChange={onPasswordHandler}/> <br/>
                이름 : <input type='text' name='username' value={username} 
                onChange={onUsernameHandler}/> <br/>
                생년월일 : <input type='date' name='birth' value={birth} 
                onChange={onBirthHandler}/> <br/>
                <Link to='/'>
                    <button type='submit' onClick={onClickHandler}>작성완료</button></Link> 
                    <button>작성취소</button>
            </div>
            </form>
                <Link to='/'>메인</Link>

        </div>
    );
};

export default Join;
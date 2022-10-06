import React from 'react';
import './List.css';
import {Link} from 'react-router-dom';

const Join = () => {
    return (
        <div>
                <div className='login'>
                아이디 : <input type='text' key={userId}/> <br/>
                비밀번호 : <input type='password' key={userPw}/> <br/>
                이름 : <input type='text' key={userName}/> <br/>
                생년월일 : <input type='date' key={userBirth}/> <br/>
                <button>작성완료</button> <button>작성취소</button>
            </div>
                <Link to='/'>메인</Link>

        </div>
    );
};

export default Join;
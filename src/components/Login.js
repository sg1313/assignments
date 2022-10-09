import React, {useState} from 'react';
import './List.css';
import { Link } from 'react-router-dom';


// https://joonganglib.tistory.com/13
// https://www.saichoiblog.com/react-localstorage/
// https://intrepidgeeks.com/tutorial/implement-react-registration-and-login-costs


const Login = () => {

    const [userid, setUserid] = useState(''); 
    const [password, setPassword] = useState('');

    const HandleIdChange = (e) => {
        localStorage.getItem(userid);
        console.log('아이디',userid);
    }
    const HandlePwChange = (e) => {
        localStorage.getItem(password);
        console.log('비밀번호', password);
    } 

    const onClickHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>  {/* p. 192 */}
        
            <div className='login'>
                아이디 : <input type='text' name='userid' onChange={HandleIdChange}/> <br/><br/>
                비밀번호 : <input type='password' name='password' onChange={HandlePwChange}/> <br/><br/>
                <Link to='/join'><button>회원가입</button> </Link>
                <button onChange={onClickHandler}>로그인</button>
            </div>
            
        </div>
    )
}

export default Login;
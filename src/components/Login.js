import React from 'react';
import './List.css';

const Login = () => {

    // const [id, setId] = useState(''); 
    // const [pw, setPw] = useState('');


    return (
        <div>  {/* p. 192 */}
            <div className='login'>
                아이디 : <input type='text'/> <br/><br/>
                비밀번호 : <input type='password'/> <br/><br/>
                <button>회원가입</button> <button>로그인</button>
            </div>
        </div>
    )
}

export default Login;
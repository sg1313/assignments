import React, { useState } from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';



// https://joonganglib.tistory.com/13
// https://www.saichoiblog.com/react-localstorage/
// https://intrepidgeeks.com/tutorial/implement-react-registration-and-login-costs


const Login = () => {

    const [savedLogin, setSavedLoginID] = useState();
    const [savedLoginPassword, setSavedLoginPassword] = useState();
    const [savedUsername , setSavedUserName] = useState();
    const [savedbirth, setSavedBirth] = useState();
    // const [click, setClick] = useState(false);
    // const password = localStorage.getItem(password);
    // const name = localStorage.getItem(username);
    // const userBirth = localStorage.getItem(birth);

    // const HandleIdChange = (e) => {
    //     localStorage.getItem(userid),
    //     console.log('아이디', value);
    // }
    // const HandlePwChange = ({value}) => {
    //     JSON.parse(localStorage.getItem(password))
    //     console.log('비밀번호', value);
    // } 
    
    // const onChangeHandler = (e) => {
        
    //         id : userid,
    //         pw : assword,
    //         name : username,
    //         userBirth : birth
    //     });

    // // }

    // const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

    // const toggleMenu = () => {
    //     setMenu(isOpen => !isOpen);  // on, off 개념 boolean. 이제 true됨
    //     console.log('클릭했습니다');
    // }

    const onClickHandler = () => {
        setSavedLoginID(localStorage.getItem('userid'));
        setSavedLoginPassword(localStorage.getItem('password'));
        setSavedUserName(localStorage.getItem('username'));
        setSavedBirth(localStorage.getItem('birth'));
        // setClick(true);
    }




    return (
        <div>  {/* p. 192 */}
            <div className='login'>
                아이디 : <input type='text' name='userid' /> <br/><br/>
                비밀번호 : <input type='password' name='password' /> <br/><br/>
                <Link to='/join'><button>회원가입</button> </Link>
                <button onClick={onClickHandler}>로그인</button>
            </div>
            { onClickHandler ?  

            <div className='loginInfo'>
                <h1>아이디는 {savedLogin}</h1>
                <h1>비밀번호는 {savedLoginPassword}</h1>
                <h1>생년월일은 {savedbirth}</h1>
                <h1>이름은 {savedUsername}</h1>
            </div>
             : null }

            
            
        </div>
    )
}

export default Login;
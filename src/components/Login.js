import React, { useState } from 'react';
import './List.css';
import { Link } from 'react-router-dom';



// https://joonganglib.tistory.com/13
// https://www.saichoiblog.com/react-localstorage/
// https://intrepidgeeks.com/tutorial/implement-react-registration-and-login-costs


const Login = () => {

    // const [savedLogin, setSavedLoginID] = useState();
    // const [savedLoginPassword, setSavedLoginPassword] = useState();
    // const [savedUsername , setSavedUserName] = useState();
    // const [savedbirth, setSavedBirth] = useState();
       
    const savedAccount = {  // localStorage에 저장된 값들을 비구조화 할당?? 으로 해봄..  useState 만들어줌..
        savedId : localStorage.getItem('userid'),
        savedPw : localStorage.getItem('password'),
        savedUsername : localStorage.getItem('username'),
        savedBirth : localStorage.getItem('birth')
    }

    const {savedId, savedPw,
    savedBirth, savedUsername} = savedAccount;

    const LoginInfo = ( ) => {
        return (
            <div className='loginInfo'>
                <p>아이디는 {savedId}</p>
                <p>비밀번호는 {savedPw}</p>
                <p>생년월일은 {savedBirth}</p>
                <p>"{savedUsername}"님, 안녕하세요.</p>
            </div>
        )
    }

    // input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        userid : '',
        password : '',
    })

    //input에 입력하면 자동적으로 account state값 변경
    const onChangeAccount = (e) => {
        setAccount({ 
            ...account,    // 복사하는 이유,... 댓글참조 https://react.vlpt.us/basic/10-useRef.html
            [e.target.name] : e.target.value      // input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
        })      
        // console.log(account);  //  입력할때마다 콘솔창에 뜸
    }
    
    const [visible, setVisible] = useState(false);
    
    const onClickHandler = (e) => {  
            console.log(savedId, savedPw);   // 저장된 아디비번 콘솔에 찍기 asdf 1234
            // console.log(account);  // 입력한 아디비번 콘솔에 찍기. setAccount하면 안찍힘
            // setSavedLoginID(localStorage.getItem('userid'));
            // setSavedLoginPassword(localStorage.getItem('password'));
            // setSavedUserName(localStorage.getItem('username'));
            // setSavedBirth(localStorage.getItem('birth'));
               setVisible(true);
           
        }
        // https://blckchainetc.tistory.com/entry/98%EC%9D%BC%EC%B0%A820210728-React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%84%A4%EC%B9%98
        // https://react.vlpt.us/basic/10-useRef.html
        // https://breathtaking-life.tistory.com/123
        // https://www.google.com/search?q=%EB%A6%AC%EC%95%A1%ED%8A%B8+%EB%B2%84%ED%8A%BC+%EB%88%84%EB%A5%B4%EB%A9%B4+%EB%B3%B4%EC%9D%B4%EA%B2%8C+%ED%95%98%EA%B8%B0&ei=5wBDY9VDwoL4BuO3maAE&start=10&sa=N&ved=2ahUKEwiV05Ok0tP6AhVCAd4KHeNbBkQQ8tMDegQIBBAE&biw=962&bih=1078&dpr=1


    return (
        <div>  {/* p. 192 */}
            <div className='login'>
                아이디 : <input type='text' name='userid' 
                id='userid' onChange={onChangeAccount}/> <br/><br/>
                비밀번호 : <input type='password' name='password' 
                id='password' onChange={onChangeAccount}/> <br/><br/>
                <Link to='/join'><button>회원가입</button> </Link>
                <button onClick={onClickHandler}>로그인</button>
            </div>
            <br/>
            {visible && <LoginInfo/>}
            
             {/* { visible && ((savedId && savedPw) === account.value)
             && <LoginInfo/> }   */}
            
            {/* visible이  true면  loginInfo 컴포넌트가 보여짐 */}
            
        </div>
    )
}

export default Login;
// import { Outlet } from 'react-router-dom';
import React from 'react';
import { useNavigate} from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goMain = ()=> (
        navigate('/')
    );

    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                <button onClick={goMain}>메인으로가기</button>
            </header>
        </div>
    );
};

export default Layout;
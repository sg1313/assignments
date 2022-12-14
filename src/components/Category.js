import { useParams } from "react-router-dom";
import List from "./List";
import React from "react";
import { Link} from 'react-router-dom';



const Category = () => {
    let { id } = useParams();
    
    return (
        <div>
            <List/>
            <h1>상품목록 페이지 {id} </h1>
            <Link to='/'>메인</Link>
        </div>
    )
}

export default Category;

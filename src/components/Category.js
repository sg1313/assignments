import { useParams } from "react-router-dom";
import List from "./List";
import React from "react";


const Category = () => {
    let { id } = useParams();
    
    return (
        <div>
            <List/>
            <h1>상품목록 페이지 {id} </h1>
        </div>
    )
}

export default Category;

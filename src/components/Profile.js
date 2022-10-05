import { useParams } from "react-router-dom";
import List from "./List";
// import Main from "./Main";


// const data = {
//     1 : { id : 1, text : '1번' },
//     2 : { id : 2, text : '2번' },
//     3 : { id : 3, text : '3번' },
//     4 : { id : 4, text : '4번' }
// };

const Profile = () => {
    const { id } = useParams();
    // const profile = data[params.id];

    return (
        <div>
            {/* <List/> */}
            <div>
            {/* { profile ? ( <div><p> 상품 목록 { profile.text} </p></div> ) : <p>존재하지 않습니다</p> } */}
            <p> 게시글 {id}</p>
            </div>
        </div>
    )
}

export default Profile;

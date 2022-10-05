import './List.css';
import { Link} from 'react-router-dom';

const List = () => {
    return(
        
            <div className='content'>
            <Link to='/1'>상품분류 1</Link><br/>
            <Link to='/2'>상품분류 2</Link><br/>
            <Link to='/3'>상품분류 3</Link><br/>
            <Link to='/4'>상품분류 4</Link><br/>
        </div>
    )
}

export default List;
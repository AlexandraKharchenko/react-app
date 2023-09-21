import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {useSelector} from "react-redux";
import Stack from 'react-bootstrap/Stack';

const Header = () => {
    const items = useSelector(state => state.value);
    return (
        <Stack direction="horizontal" gap={3} className="d-flex justify-content-center" style={{paddingTop: "10px"}}>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/todoList">ToDo List</Link>
            </Nav.Item>
            {items.map(item => (
                <Nav.Item key={item.id}>
                    <Link
                        to={`/todoList/${item.id}`}
                    >
                        ToDo Item {item.id}
                    </Link>
                </Nav.Item>
            ))}
        </Stack>)
}
export default Header;









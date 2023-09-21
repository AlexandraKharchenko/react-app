import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {changeChecked, deleteTodoItem} from "../store/slices/todoItems";
import {useNavigate} from "react-router";
import Col from "react-bootstrap/Col";

const TodoItem = (props) => {
    const data = props.items
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const handleDelete = (id) => () => {
        dispatch(deleteTodoItem(id))
    }
    const redirectUser = (id) => () => {
        navigation(`/todoList/${id}`);
    }

    return (
        <>
                {data.map((item, index) => {
                    const handleChecked = () => {
                        dispatch(changeChecked({id: item.id, checked: !item.checked}))
                    }
                    return (<Col className="col-4 p-2" key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Title onClick={redirectUser(item.id)}>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Form.Check
                                    label="Завершено?"
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={handleChecked}
                                />
                                <Button variant="danger" type="reset"
                                        onClick={handleDelete(item.id)}>Удалить</Button>
                            </Card.Body>
                        </Card></Col>)
                })}
        </>)
}
export default TodoItem
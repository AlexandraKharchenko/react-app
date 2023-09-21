import Col from "react-bootstrap/Col";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import {useSelector} from "react-redux";
import DefaultTemplate from "../templates/DefaultTemplate";
import Row from "react-bootstrap/Row";


const HomePage = () => {
    const data = useSelector(state => state.value);

    return <>
        <h1 className="text-center mt-5 mb-5">Home page</h1>
        <DefaultTemplate classname="d-flex justify-content-center">
            <Col className="col-4">
                <TodoForm/>
            </Col>
            <Col className="col-8">
                <Row>
                    <TodoItem items={data}/>
                </Row>
            </Col>
        </DefaultTemplate>
    </>
}

export default HomePage;
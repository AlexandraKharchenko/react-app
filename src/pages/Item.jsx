import {useParams} from "react-router";
import {useSelector} from "react-redux";
import TodoItem from "../components/TodoItem";

const Item = () => {
    let index = useParams().todoId;
    const data = useSelector(state => state.value);
    const todoItem = data.filter(item => item.id.toString() === index)

    if (todoItem.length) {
        return <div className="d-flex justify-content-center flex-wrap">
            <TodoItem items={todoItem}/>
        </div>
    } else return <div>There is no item</div>
}
export default Item;
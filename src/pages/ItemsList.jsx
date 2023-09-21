import TodoItem from "../components/TodoItem";
import {useSelector} from "react-redux";

const ItemsList = () => {
    const data = useSelector(state => state.value);
    return <>
        <h1 className="text-center mt-5 mb-5">ToDo List</h1>
        <div class="d-flex flex-column flex-wrap align-items-center">
            <TodoItem items={data}/>
        </div>
    </>
}
export default ItemsList;
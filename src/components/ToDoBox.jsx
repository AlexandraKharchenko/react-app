import React, {useState} from "react"
import Item from "./Item";
import {uniqueId} from "lodash";

const ToDoBox = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uniqueId(),
            text: text,
        };


        setData([...data, newTodo])
        setText("")

    }
    const handleItemRemove = (id) => {
        const newItems = data.filter((item) => item.id !== id);
        setData(newItems)
    }

    console.log(text, "text", data);
    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text" value={text} required="" className="form-control"
                               placeholder="I am going..." onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleAdd}>add</button>
                </form>
            </div>

            <Item items={data} handleItemRemove={handleItemRemove}/>
        </div>
    )

}

export default ToDoBox
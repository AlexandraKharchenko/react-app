import React from "react"
import Item from "./Item";
import {uniqueId} from "lodash";


class ToDoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ""
        }
    }

    handleAdd = (e) => {
        e.preventDefault()
        this.setState((state) => {
            const {text, items} = state;
            const newTodo = {
                id: uniqueId(),
                text: text,
            };
            return {
                items: [newTodo, ...items],
                text: "",
            }
        })
    };
    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleItemRemove = (id) => () => {
        const newItems = this.state.items.filter((item) => item.id !== id);
        this.setState({items: newItems});
    };

    render() {
        return <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text" value={this.state.text} required="" className="form-control"
                               placeholder="I am going..." onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>add</button>
                </form>
            </div>

            <Item items={this.state.items} handleItemRemove={this.handleItemRemove}/>
        </div>
    }
}

export default ToDoBox
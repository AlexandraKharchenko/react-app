import React from "react"


class Component extends React.Component {
    constructor(props) {
        super(props);
        const count = []
        this.state = {
            count
        }
    }

    handleAdd = () => {
        this.setState((state) => {
            const {count} = state;
            const newCount = count.length > 0 ? count[count.length - 1] + 1 : 1
            const updatedCount = [...count, newCount]
            return {count: updatedCount}
        })
    }

    handleRemove = () => {
        this.setState((state) => {
            const {count} = state;
            const newCount = count[count.length - 1] - 1
            const updatedCount = [...count, newCount]
            return {count: updatedCount}
        })
    };

    handleRemoveItem = (id) => () => {
        const newItems = this.state.count.filter((item) => item !== id);
        this.setState({count: newItems});
    };

    render() {

        const {count} = this.state
        console.log(count, "count");

        return (<div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleAdd}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleRemove}>-</button>

                </div>

                <div className="list-group"> {count.map((item, index) => {
                    return <button type="button"
                                   className="list-group-item list-group-item-action" key={index}
                                   onClick={this.handleRemoveItem(item)}>{item}</button>
                }).reverse()}
                </div>
            </div>

        )


    }
}

export default Component
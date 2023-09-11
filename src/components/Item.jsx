import React from "react"

const Item = (props) => {
    const toDos = props.items;

    return <>{
        toDos.map(item => {
            const handleRemoveClick = () => {
                props.handleItemRemove(item.id);
            };
            return (<div key={item.id}>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={handleRemoveClick}>-
                        </button>
                    </div>
                    <div className="col">{item.text}</div>
                </div>
                <hr/>
            </div>)
        })
    }</>


}

export default Item
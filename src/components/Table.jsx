const Table = (props) => {
    const inputs = props.items.form;
    const sortedInputs = Object.keys(inputs).sort();

    return <div>
        <button type="button" className="btn btn-primary" onClick={props.handleBack}>Back</button>
        <table className="table">
            <tbody>
            {sortedInputs.map((key, index) => {
                return <tr key={index}>
                    <td>{key}</td>
                    <td>{inputs[key].toString()}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default Table
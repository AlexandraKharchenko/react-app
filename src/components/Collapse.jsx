import React from "react"


class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: this.props.opened

        }
    }

    handleClick = () => {
        this.setState((state) => {
            const {isShown} = state;
            return {isShown: !isShown};

        });
    };

    render() {
        const {text } = this.props
        const {isShown} = this.state

        return <div>
            <p>
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={isShown} onClick={this.handleClick}>Link
                    with href</a>
            </p>
            <div className={`collapse ${isShown ? 'show' : ''}`} >
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    }
}
export default Collapse
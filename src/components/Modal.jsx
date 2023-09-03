import React from "react"
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";


class Modal extends React.Component {

    static Header = Header
    static Body = Body
    static Footer = Footer

    render() {
        const isOpened = this.props.isOpen ? "block" : "none"

        return <div className={this.props.isOpen ? "modal fade show" : "modal"} style={{"display": isOpened}} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Modal
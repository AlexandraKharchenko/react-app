import React from "react";
import Title from "./Title";
import Body from "./Body";
import Text from "./Text";


class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text;


    render() {
        return <div className="card">
            {this.props.children}
        </div>
    }
}

export default Card
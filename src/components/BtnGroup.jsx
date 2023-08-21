import React from "react";
import cn from 'classnames';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeBtn: null}
    }

    setActive = (btn) => {
        this.setState((state) => {
            const {button} = state;
            return {activeBtn: button === btn ? null : btn};

        });
    };

    handleLeftButtonClick = () => {
        this.setActive('left');
    };
    handleRightButtonClick = () => {
        this.setActive('right');
    };

    render() {
        const {activeBtn} = this.state;

        const btnClassLeft = cn('btn btn-secondary left', {
            'active': activeBtn === "left"
        });

        const btnClassRight = cn('btn btn-secondary right', {
            'active': activeBtn === "right"
        });

        return <div className="btn-group" role="group">
            <button type="button" className={btnClassLeft} onClick={this.handleLeftButtonClick}>Left</button>
            <button type="button" className={btnClassRight} onClick={this.handleRightButtonClick}>Right</button>
        </div>
    }
}

export default BtnGroup
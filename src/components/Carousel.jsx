import React from "react"


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    handlePrevClick = () => {
        this.setState((state) => {
            const {currentIndex} = state;
            return {currentIndex: currentIndex  === 0 ? this.props.images.length -1 : currentIndex - 1};

        });
    };

    handleNextClick = () => {
        this.setState((state) => {
            const {currentIndex} = state;
            return {currentIndex: currentIndex === this.props.images.length -1 ? 0 : currentIndex + 1};

        });
    };

    render() {
        const {images } = this.props
        const {currentIndex} = this.state

        return <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((item, index)=>(
                    <div className={index === currentIndex ? `carousel-item active` : `carousel-item`} key={index}>
                        <img alt={`cat ${index}`} className="d-block" src={item}/>
                    </div>
                ))
                }
            </div>
            <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev"  onClick={this.handlePrevClick}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.handleNextClick}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    }
}
export default Carousel
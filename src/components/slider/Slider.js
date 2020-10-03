import React from "react";
import "./slider.css";

class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            anim: false,
        };
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
    }

    handleLeft() {
        this.setState(prevState => (
            {
                count: prevState.count + 1,
                anim: true,
            }
        ))

        if (this.state.count === 3) {
            this.setState({
                count: 1,
            })
        }
    }

    handleRight() {
        this.setState(prevState => (
            {
                count: prevState.count - 1,
                anim: true,
            }
        ))
        if (this.state.count === 1) {
            this.setState({
                count: 3,
            })
        }
    }


    render() {
        return (
            <div className="slider">
                <div className="slider-container">
                    <div className="slide-images">
                        <img src={`./img/slide${this.state.count}.jpg`} alt="" />
                    </div>
                </div>
                <div className="button-group">
                    <button className="btn" onClick={this.handleLeft}>Prev</button>
                    <button className="btn" onClick={this.handleRight}>Next</button>
                </div>

            </div>
        )
    }

}

export default Slider;
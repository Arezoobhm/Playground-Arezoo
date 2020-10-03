import React from 'react';
import './cards.css';

function Cards() {
    return (
        <div className="card-container">
            <div className="row">
                <div className="card">
                    <div className="card-image">
                        <img src="./cards/innovation.png"></img>
                    </div>
                    <div className="card-body">
                        <p>
                        Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Innovation" className="card-btn">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./cards/playharder.png"></img>
                    </div>
                    <div className="card-body">
                        <p>
                            Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Play_Hard" className="card-btn">Read More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="./cards/simplicity.png"></img>
                    </div>
                    <div className="card-body">
                        <p>
                        Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Simplicity" className="card-btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;

import React from 'react';
import './banners.css';

function Banner() {
    return (
        <div className="banner-container">
            <img className="banner-image" src="./banner/banner1.jpg" alt="" />
            <div id="weare" className="banner-content">
                <div className="banner-content-text">
                    <div className="banner-title">
                        <h3>We</h3>
                        <h3>are.</h3>
                    </div>
                    <p>Here we are. Here we are. <br /> Here we are. Here we are. Here we are.</p>
                    <button className="banner-btn" href="">the players &gt;</button>
                </div>
            </div>
            <img className="banner-image-middle" src="./banner/banner2.jpg" alt="" />
            <div id="wedo" className="banner-content-middle">
                <div className="banner-content-text-middle">
                    <div className="banner-title-middle">
                        <h3>We</h3>
                        <h3><bdi>do.</bdi></h3>
                    </div>
                    <bdi className="para">Here we are. Here we are. <br /> Here we are. Here we are. Here we are.</bdi>
                    <button className="banner-btn-middle" href="">&lt; the projects</button>
                </div>
            </div>
            <img id="careers" className="banner-image" src="./banner/banner3.jpg" alt="" />
            <div className="banner-content">
                <div className="banner-content-text">
                    <div className="banner-title">
                        <h3>Carrers.</h3>
                    </div>
                    <p>Here we are. Here we are. <br /> Here we are. Here we are. Here we are.</p>
                    <button className="banner-btn" href="">the positions &gt;</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;

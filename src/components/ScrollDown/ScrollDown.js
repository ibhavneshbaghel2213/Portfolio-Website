import React from "react";

import "./ScrollDown.scss"

import "./media.scss"

const ScrollDown = () => {
    return (
        <>
            <div className="scroll">
                <div className="scroll-left">
                    <p>Scroll Down</p>
                    <i className="fa-solid fa-arrow-down"></i>
                </div>
                <div className="scroll-right">
                    <p>Scroll Down</p>
                    <i className="fa-solid fa-arrow-down"></i>
                </div>
            </div>
        </>
    )
}

export default ScrollDown
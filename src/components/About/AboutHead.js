import React, { Component } from "react";

// import "./ContactHead.scss"

import "./AboutHead.scss"

class AboutHead extends Component {

    componentDidMount() {
        let btnn1 = document.querySelectorAll(".op3")

        btnn1.forEach((el) => {
            el.style.opacity = "0"
        })

        let head1 = document.querySelector(".aboutHead")
        let currentPosition3 = head1.getBoundingClientRect().top

        if (currentPosition3 < 100) {
            btnn1.forEach(function (el, index) {
                setTimeout(function () {
                    el.style.opacity = "1"
                    el.classList.add("start")

                }, index * 100)
                el.classList.remove("start")

            })
        }
        else {
            let screenPosition = window.innerHeight / 1.2

            window.addEventListener("scroll", () => {
                let currentPosition4 = head1.getBoundingClientRect().top

                if (currentPosition4 < screenPosition) {

                    if (head1.classList.contains("active")) {

                    }
                    else {

                        btnn1.forEach(function (el, index) {
                            setTimeout(function () {
                                el.style.opacity = "1"
                                el.classList.add("start")

                            }, index * 100)
                            el.classList.remove("start")

                        })


                        head1.classList.add("active")

                    }

                }


            })
        }

    }




    render() {
        return (
            <>
                <div className="aboutHead">
                    <button className="op3 ">M</button>
                    <button className="op3 ">e</button>
                    <button className="op3 ">,</button>
                    <button className="op3  mm">M</button>
                    <button className="op3 ">y</button>
                    <button className="op3 ">s</button>
                    <button className="op3 ">e</button>
                    <button className="op3 ">l</button>
                    <button className="op3 ">f</button>
                    <button className="op3  aa">a</button>
                    <button className="op3 ">n</button>
                    <button className="op3 ">d</button>
                    <button className="op3  ii">I</button>
                </div>
            </>
        )
    }
}

export default AboutHead
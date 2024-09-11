import React, { Component } from "react";

class WorkHead extends Component {



    componentDidMount() {

        let btnn = document.querySelectorAll(".op2")

        btnn.forEach((el) => {
            el.style.opacity = "0"
        })

        let head = document.querySelector(".workHead")
        let currentPosition = head.getBoundingClientRect().top

        if (currentPosition < 100) {
            btnn.forEach(function (el, index) {
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
                let currentPosition1 = head.getBoundingClientRect().top

                if (currentPosition1 < screenPosition) {

                    if (head.classList.contains("active")) {

                    }
                    else {

                        btnn.forEach(function (el, index) {
                            setTimeout(function () {
                                el.style.opacity = "1"
                                el.classList.add("start")

                            }, index * 100)
                            el.classList.remove("start")

                        })


                        head.classList.add("active")

                    }

                }


            })
        }

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className="workHead">
                <button className="op2 ">M</button>
                <button className="op2 ">y</button>
                <button className="op2 ">,</button>
                <button className="op2 ">W</button>
                <button className="op2 ">o</button>
                <button className="op2 ">r</button>
                <button className="op2 ">k</button>
            </div>
        )
    }
}



export default WorkHead
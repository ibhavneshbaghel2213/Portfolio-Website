import React, { Component } from "react";

import "./About.scss"

import "./media.scss"

import { Link } from "react-router-dom";

import TestJs from "./About1";


class About extends Component {

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



    componentWillUnmount() {






    }


    render() {
        return (
            <>
                <section className="about  justify-content-center align-items-lg-center" id="about">
                    <div className="about-text">
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
                        <div className="aboutMe">
                        <p>I'm Bhavnesh Baghel, Enthusiastic Developer/Devops with two years’ experience in Python, DevOps, Shell Scripting. Skilled in fetching and cleaning data, building APIs, Automation,CI/CD , and web crawling.</p><p> I am currently employed as a DevOps Engineer.</p><p>I am a certified professional in DevOps, Data Science, and Development, with a strong foundation in modern technologies that drive innovation and efficiency in today's digital landscape.</p><p>Results-driven DevOps Engineer with a proven track record of 3 years in supporting, automating, and optimizing mission-critical deployments on AWS. Proficient in leveraging advanced configuration management, CI/CD practices, Terraform, and a strong understanding of DevOps methodologies. </p><p>I'm dedicated to making valuable contributions to the technology industry while continuously growing my expertise.</p>
                        </div>
                    </div>
                    <div className="skills">
                        <div id="myCanvasContainer">
                            <canvas width="600" height="550" id="myCanvas">
                                <ul id="tags">
                                    <li><a href="" target="_blank">HTML</a></li>
                                    <li><a >CSS</a></li>
                                    <li><a >PostgreSQL</a></li>
                                    <li><a >PYTHON</a></li>
                                    <li><a >Data Management</a></li>
                                    <li><a >DataBase</a></li>
                                    <li><a >DevOps</a></li>
                                    <li><a >Aws</a></li>
                                    <li><a >SQL</a></li>
                                    <li><a >Scylla DB</a></li>
                                    <li><a >Linux</a></li>
                                    <li><a >GIT</a></li>
                                    <li><a >Ansible</a></li>
                                    <li><a >Rest Api</a></li>
                                    <li><a >Jenkins</a></li>
                                    <li><a >CI/CD</a></li>
                                    <li><a >Terraform</a></li>
                                    <li><a >Pipeline</a></li>
                                    <li><a >Maven</a></li>
                                    <li><a >checkSum</a></li>
                                    <li><a >Docker</a></li>
                                    <li><a >Automation</a></li>
                                    <li><a >containers</a></li>
                                    <li><a >Kubernetes</a></li>
                                    <li><a >container Orchestration</a></li>
                                    <li><a >DevSecOps</a></li>
                                    <li><a >Security</a></li>
                                    <li><a >deployments</a></li>
                                    <li><a >AWS</a></li>
                                    <li><a >Azure</a></li>
                                    <li><a >Shell Scripting</a></li>
                                    <li><a >Cloud Computing</a></li>

                                </ul>
                            </canvas>
                        </div>

                    </div>
                </section>
                <TestJs />
            </>
        )
    }
}



export default About
import React, { Component } from "react";

import "./Main.scss"

import "./media.scss"

import { Link } from "react-router-dom";
import JustJs from "./Mainjs";



class Main extends Component {


    componentDidMount() {


        let canva = document.getElementById('canvas')

        let ctx = canva.getContext('2d');

        canva.width = window.innerWidth;

        canva.height = window.innerHeight;

        let spots = [];

        let hue = 0;

        let mouse = {
            x: undefined,
            y: undefined
        }

        canva.addEventListener("mousemove", function (event) {
            mouse.x = event.x + 0;
            mouse.y = event.y + 0;
            for (let i = 0; i < 8; i++) {
                spots.push(new particle())
            }
        })

        class particle {
            constructor() {
                this.x = mouse.x
                this.y = mouse.y
                this.size = Math.random() * 1.2 + 0.05
                this.speedx = Math.random() * 1 - 4
                this.speedy = Math.random() * 1 + 1.5
                this.color = "hsl(" + hue + ", 100%, 50%)"

            }

            update() {
                this.x += this.speedx
                this.y += this.speedy
                if (this.size > 0.1) {
                    this.size -= 0.01
                }
            }

            draw() {
                ctx.fillstyle = this.color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }


        function handleParticle() {
            for (let i = 0; i < spots.length; i++) {
                spots[i].update();
                spots[i].draw()
                for (let j = i; j < spots.length; j++) {
                    const dx = spots[i].x - spots[j].x
                    const dy = spots[i].y - spots[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 80) {
                        ctx.beginPath()
                        ctx.strokeStyle = spots[i].color
                        ctx.lineWidth = spots[i].size / 10
                        ctx.moveTo(spots[i].x, spots[i].y)
                        ctx.lineTo(spots[j].x, spots[j].y)
                        ctx.stroke()
                    }
                }
                if (spots[i].size <= 0.1) {
                    spots.splice(i, 1)
                    i--
                }
            }
        }


        function animate() {
            ctx.clearRect(0, 0, canva.width, canva.height)
            handleParticle()
            hue++
            requestAnimationFrame(animate)
        }

        window.addEventListener('resize', function () {
            canva.width = canva.offsetWidth
            canva.height = canva.offsetHeight
            // init()
        })



        window.addEventListener('mouseout', function () {
            mouse.x = undefined
            mouse.y = undefined
        })

        animate()


    }




    componentWillUnmount() {



    }


    render() {
        return (
            <>
                <section className="intro top" >


                    <div className="intro-text">
                        <div className="html"></div>
                        <div className="intro-btn html-font">

                            <div className="head1">

                                <button className="h2 op ">H</button>
                                <button className=" op ">e</button>
                                <button className=" op ">y,</button>
                            </div>

                            <div className="head1">

                                <button className="i op ">I'</button>
                                <button className=" op ">m</button>
                                <button className="y op ">B</button>
                                <button className=" op ">h</button>
                                <button className=" op ">a</button>
                                <button className="op ">v</button>
                                <button className="op ">n</button>
                                <button className="op ">e</button>
                                <button className="op ">s</button>
                                <button className="op ">h</button>
                            </div>

                            <div className="head1">
                                <button className="w op ">D</button>
                                <button className=" op ">e</button>
                                <button className=" op ">v</button>
                                <button className=" op ">O</button>
                                <button className=" op ">p</button>
                                <button className=" op ">s</button>
                                <button className="d op ">E</button>
                                <button className=" op ">n</button>
                                <button className=" op ">g</button>
                                <button className=" op ">i</button>
                                <button className=" op ">n</button>
                                <button className=" op ">e</button>
                                <button className=" op ">e</button>
                                <button className=" op ">r</button>
                            </div>

                        </div>
                    </div>



                    <canvas className="canvas" id="canvas">

                    </canvas>

                    <div className="para ">
                        <p>Python/DevOps Engineer</p>
                    </div>




                    <div className="contactMe ">
                        <Link to="/contact"><button>Contact Me</button></Link>
                    </div>


                </section>
                <JustJs />
            </>
        )
    }
}

export default Main
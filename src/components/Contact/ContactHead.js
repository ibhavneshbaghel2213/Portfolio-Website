import React,{Component} from "react";

// import "./ContactHead.scss"

class ContactHead extends Component{

    componentDidMount(){
        let btnn2 = document.querySelectorAll(".op4")

        btnn2.forEach((el) => {
            el.style.opacity = "0"
        })

        let head2 = document.querySelector(".contact-head")
        let currentPosition5 = head2.getBoundingClientRect().top

        if(currentPosition5<100){
            btnn2.forEach(function (el, index) {
                setTimeout(function () {
                    el.style.opacity = "1"
                    el.classList.add("start")

                }, index * 100)
                el.classList.remove("start")

            })
        }
        else{
            let screenPosition3 = window.innerHeight / 1.2
            
            window.addEventListener("scroll", () => {
                let currentPosition6 = head2.getBoundingClientRect().top
                    
                if (currentPosition6 < screenPosition3) {
    
                    if (head2.classList.contains("active")) {
    
                    }
                    else {
    
                        btnn2.forEach(function (el, index) {
                            setTimeout(function () {
                                el.style.opacity = "1"
                                el.classList.add("start")
    
                            }, index * 100)
                            el.classList.remove("start")
    
                        })
    
    
                        head2.classList.add("active")
    
                    }
    
                }
    
    
            })
        }

    }

    componentWillUnmount(){


        

    }


    render(){
        return(
            <>
                <div className="contact-head" >
                    <button className="op4">C</button>
                    <button className="op4">o</button>
                    <button className="op4">n</button>
                    <button className="op4">t</button>
                    <button className="op4">a</button>
                    <button className="op4">c</button>
                    <button className="op4">t</button>
                    <button className="op4 mm">m</button>
                    <button className="op4">e</button>

                </div>
            </>
        )
    }
}

export default ContactHead
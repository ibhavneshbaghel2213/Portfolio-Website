import React, { Component } from "react";

class FormInitial extends Component {


    componentDidMount() {
        let inital = document.querySelectorAll(".name55")
        let inital1 = document.querySelector(".name65")
    
    
        inital.forEach((elem) => {
            elem.style.setProperty('--dataAfter', '0%')
            elem.style.setProperty('--colorAfter', 'aqua')
    
        })
    
        inital1.style.setProperty('--dataAfter', '0%')
        inital1.style.setProperty('--colorAfter', 'aqua')
        // const subBtn = document.querySelector(".submitBtn")
        // subBtn.click()
    }
    componentWillUnmount() {

    }

    render() {
        return (
            <>
            </>
        )
    }
}

export default FormInitial
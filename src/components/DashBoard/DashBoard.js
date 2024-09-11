import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Main from "../Main/Main";
import ScrollDown from "../ScrollDown/ScrollDown";
import Space from "../Space/Space";
import Work from "../Work/Work";

const DashBoard = () => {
    return (
        <div>
            <Main />
            {/* <ScrollDown /> */}
            <Space />
            <Work />
            <Space/>
            <About/>
            {/* <ScrollDown/> */}
            <Space/>
            <Contact />
            
        </div>
    )
}

export default DashBoard
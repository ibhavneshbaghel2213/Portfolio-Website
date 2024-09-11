import React, { useState, useEffect } from "react";

import Loader from "react-spinners/FadeLoader";

import "./Model.scss"

import "./media.scss"



let count = 0




const Model = (props) => {

    const featuredImages = props.img

    const [currentIndex, setCurrentState] = useState(0)

    let [loading, setLoading] = useState(true);



    useEffect( () => {
        // setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])

 


    const clickHandler = () => {
        count = (count + 1) % featuredImages.length

        setCurrentState(count)
    }
    const clickHandler1 = () => {
        const imageLength = featuredImages.length
        count = (currentIndex + imageLength - 1) % imageLength

        setCurrentState(count)
    }

    const childElementHandler = (e) => {
        e.stopPropagation()
    }

    if (!props.show) {
        return null
    }
  


   
    return (

        <>
            <div className="modelWrapper d-flex" onClick={() => {
                setCurrentState(0);
                setLoading(true)
                props.onClose()
            }}>


                <div className="model" onClick={childElementHandler}>

                    <div>
                        <button className="btn-style" onClick={() => {
                            setCurrentState(0);
                            setLoading(true)
                            props.onClose()
                        }}><i className="fa-solid fa-xmark" ></i></button>

                    </div>
                    <div className="slider">

                        {   
                            
                            loading ?

                                <Loader color={"#36d7b7"} loading={loading} height={30} margin={4} speedMultiplier={2} />
                                
                                :
                                <img src={featuredImages[currentIndex]} alt="projectImage" className="img-fluid" onClick={clickHandler} />
                        }




                    </div>
                    <div className="previousBtn" onClick={clickHandler1}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="nextBtn" onClick={clickHandler}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>


                </div>
                <div className="projectLink">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>

                </div>

            </div>




        </>
    )
}

export default Model
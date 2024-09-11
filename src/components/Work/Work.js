import React from "react";
import "./Work.scss"
import "./media.scss"

import { Link } from "react-router-dom";
import Model from "../../Model/Model";
import WorkHead from "./workHead";

import { projectImg, projectLink} from "../../ProjectImages/Project";



export const Work = () => {



    const [show, setShow] = React.useState(false)
    const[image,setImage]=React.useState([])
    const [link, setLInk] =React.useState("")
    const [text, setText] =React.useState("")
    const setData= (e)=>{
        let data=[]
        projectImg.map(img=>{
            if(img.role===e){
                data.push(img.image)
            }
            return 0
        })
        setImage(data)
        let data1 =""
        projectLink.map(link=>{
            if(link.role===e){
                data1=link.link
            }
            return 0 
        })
        setLInk(data1)
        let data2 =""
        projectLink.map(text=>{
            if(text.role===e){
                data2=text.text
            }
            return 0
        })
        setText(data2)
        setShow(true)
    }

    return (
        <>
            <section className="work" id="work">
                <div className="workTop d-flex justify-content-between align-items-center">
                    <div className="workContent">
                        <WorkHead />
                        <p>I possess a versatile mindset and a strong willingness to explore new possibilities, enabling me to constantly push the boundaries of my creativity in my craft. I actively seek opportunities to experiment with novel ideas and approaches, consistently striving to bring fresh and innovative designs to life. My dedication to creativity drives me to develop impactful designs that leave a lasting impression and evoke a sense of amazement.<br />
                            Intrested to see more? visit <Link to="/work"> my work</Link> page
                        </p>
                    </div>
                    <div className="workBtn">
                        <div className="SeeMore">
                            <Link to="/work"><button>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="workss d-flex justify-content-center">
                    <div className="project"  >
                        <img src="/Static/frontend.png" className="img-fluid" alt="Project1" 
                        onClick={()=>setData(1)} />
                    </div>
                    <div className="project" >
                        <img src="/Static/scylla.png" className="img-fluid" alt="Project2"  onClick={()=>setData(2) }/>
                    </div>
                    <div className="project project1" >
                        <img src="/Static/1_9lRCz6LmBszLXNeObePYxA.png" className="img-fluid" alt="Project3"  onClick={()=>setData(3) }/>
                    </div>
                    <Model show={show} onClose={()=> setShow(false)} img={image} link={link} text={text}>

                    </Model>

                    
                </div>




            </section>
        </>
    )
}


export default Work
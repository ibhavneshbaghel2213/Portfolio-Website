import React from "react";

import emailjs from '@emailjs/browser';


import "./Contact.scss"

import "./media.scss"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import ContactHead from "./ContactHead";
import FormInitial from "./FormInital";






let count = 0

const notifySuccess = () => toast.success('Message Successfully Send', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

function notifyError(msg) {
    toast.error(`${msg}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

function letsTost(element) {
    if (count === 0) {
        toast('Let me know if you want more information.', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
        count = count + 1
        let first = document.querySelector(".submitBtn")
        first.click()
        
    }

}

const focusHandler = (element) => {
    let style = element.target.parentElement.style
    let width = element.target.offsetWidth - 2

    style.setProperty('--dataAfter', `${width}px`)
}




const blurHandler = (element) => {
    let style = element.target.parentElement.style
    style.setProperty('--dataAfter', '0%')
}

const colorChange = (element) => {
    let style = element.target.parentElement.style
    style.setProperty('--colorAfter', 'aqua')
}











const Contact = () => {

  

    const { register, handleSubmit, formState: { errors, }, clearErrors } = useForm()

    const onSubmit =async (data) => {
        
        
        let config =  {
            name: data.Name,
            email: data.Email,
            subject : data.Subject || "",
            message: data.Message
        }
        clearErrors()

        // console.log(data.Subject)
        emailjs.init('RW0D-SvjU6q-RB71k')

        await emailjs.send("service_mxvavlj","template_zedys4k",config).then((result) => {
                // console.log(result);
            }, (error) => {
                alert("Some Error Occurred");
            });

        notifySuccess()
        
        // console.log(data)
    };

    console.log(errors)


    async function check() {
        if (errors) {
            // console.log(errors)

            if (errors.Name) {
                errors.Name.ref.parentElement.style.setProperty('--colorAfter', "red")
                errors.Name.ref.parentElement.style.setProperty('--dataAfter', "93%")
                let msg = errors.Name.message
                notifyError(msg)

            }
            if (errors.Email) {

                errors.Email.ref.parentElement.style.setProperty('--colorAfter', "red")
                errors.Email.ref.parentElement.style.setProperty('--dataAfter', "93%")
                let msg = errors.Email.message
                notifyError(msg)



            }
            if (errors.Message) {
                errors.Message.ref.parentElement.style.setProperty('--colorAfter', "red")
                errors.Message.ref.parentElement.style.setProperty('--dataAfter', "96.3%")
                let msg = errors.Message.message
                notifyError(msg)

            }

        }
        console.log(errors)

    }




    return (
        <>
            <section className="contact" id="contact">


                <ContactHead />

                <form onMouseOver={letsTost} onSubmit={handleSubmit(onSubmit)} id="formDemo" >
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-11 col-sm-6 name55">


                                <input type="text" className="input" placeholder="Name" onFocus={focusHandler} name="user_name"    {...register("Name", {
                                    onBlur: (e) => {
                                        blurHandler(e)

                                    },
                                    onChange: (e) => {
                                        colorChange(e)
                                    },
                                    required: "Name Required",
                                })}





                                />
                            </div>
                            <div className="col-11 col-sm-6 name55">

                                <input type="email" className="input" placeholder="Email" name="user_email" onFocus={focusHandler}     {...register("Email", {
                                    onBlur: (e) => {
                                        blurHandler(e)

                                    },
                                    onChange: (e) => {
                                        colorChange(e)
                                    },
                                    required: "Email Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })} />


                            </div>
                            <div className="col-11 col-sm-12 name55">
                                <input className="subject" type="text" placeholder="Subject" name="subject" onFocus={focusHandler}   {...register("Subject", {
                                    onBlur: (e) => {
                                        blurHandler(e)

                                    }
                                }
                                )} />
                            </div>
                            <div className="col-11 col-sm-12 name65">
                                <textarea placeholder="Message" name="message" onFocus={focusHandler} {...register("Message", {
                                    onBlur: (e) => {
                                        blurHandler(e)

                                    },
                                    onChange: (e) => {
                                        colorChange(e)
                                        
                                    },
                                    required: "Message Required"
                                })} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="send-btn">
                        <div className="send">
                            <button className="submitBtn" type="submit" onClick={check} form="formDemo">Send Message</button>
                        </div>

                        <div className="email">
                            <p>@:- bhavnesh1322@gmail.com</p>
                        </div>
                    </div>
                </form>


            </section>


            <ToastContainer toastStyle={{ backgroundColor: "black" }} />
            <FormInitial />

        </>
    )
}

export default Contact
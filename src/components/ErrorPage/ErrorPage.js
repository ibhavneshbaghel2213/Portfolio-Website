import React from "react";

import "./ErrorPage.scss"

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <div className="errorPage">
                <h1>Oops! you type wrong URL</h1>
                <p><Link className="errorLink" to="/">go to home page</Link></p>
            </div>
        </>
    )
}

export default ErrorPage
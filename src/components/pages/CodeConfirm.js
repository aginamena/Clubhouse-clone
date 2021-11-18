import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/CodeConfirm.scss";

function CodeConfirm() {
    return (
        <div id="codeConfirm">
            <Link to="/get_username" className="backbtn">
                <img src="https://icon-library.com/images/back-arrow-icon/back-arrow-icon-10.jpg" alt="go to previous page" />
            </Link>
            <h1>Enter the code <br /> we texted you</h1>
            <input type="text" />
            <small>Did not recieve it? <span>tap to resend</span></small>
            <Link to="/allow_notification" className="btn btn-primary btn-lg next-btn">
                Next<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Right_arrow.svg" alt="to go next page" />
            </Link>
        </div>
    )
}

export default CodeConfirm

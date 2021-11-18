import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/PhoneConfirmation.scss";
import PhoneInput from "react-phone-number-input";

function PhoneConfirmation() {
    const [value, setValue] = useState();
    return (
        <div className="container-fluid" id="phoneConfirmation">
            <Link to="/" className="backbtn">
                <img src="https://icon-library.com/images/back-arrow-icon/back-arrow-icon-10.jpg" alt="go to previous page" />
            </Link>
            <h1>Enter your phone #</h1>
            <PhoneInput international defaultCountry="US" value={value} onChange={setValue} />


            <p>By entering your number, you're agreeing <br />to our terms of service and privacy policy. </p>
            <Link to="/code_confirm" className="btn btn-primary btn-lg next-btn">
                Next<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Right_arrow.svg" alt="to go next page" />
            </Link>
        </div>
    )
}

export default PhoneConfirmation

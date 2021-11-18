import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/PhoneConfirmation.scss";
import PhoneInput from "react-phone-number-input";

function PhoneConfirmation() {
    const [value, setValue] = useState();
    return (
        <div className="container-fluid" id="phoneConfirmation">
            <Link to="/">
                <img src="https://icon-library.com/images/back-arrow-icon/back-arrow-icon-10.jpg" />
            </Link>
            <h1>Enter your phone #</h1>
            <PhoneInput international defaultCountry="US" value={value} />


            <p>By entering your number, you're agreeing to our terms of service and privacy policy. </p>
        </div>
    )
}

export default PhoneConfirmation

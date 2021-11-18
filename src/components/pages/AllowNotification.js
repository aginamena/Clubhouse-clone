import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/AllowNotification.scss";

function AllowNotification() {
    return (
        <div id="allowNotification">
            <h1>Last important step!</h1>
            <h1 id="allowNotification_heading2">Enable notifications to know<br /> when people are talking</h1>
            <div >
                <div>
                    <h3>Clubhouse Would Like to Send <br />You Notifications</h3>
                    <small>Notifications may include <br />alerts, sounds, and icon badges</small>
                </div>
                <div id="allowNotification_links">
                    <Link to="/" id="do_not_allow"><small>No</small></Link>
                    <Link to="/"><small>Yes</small></Link>
                </div>
            </div>
            <img src="http://cdn.onlinewebfonts.com/svg/img_516565.png" />

        </div>
    )
}

export default AllowNotification

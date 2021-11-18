import React from 'react'
import "../../styles/Welcome.scss";
import { Link } from "react-router-dom";
function Welcome() {
    return (
        <div id="welcome">
            <div className="container">
                <h1>Welcome!</h1>
                <div id="welcome-text">
                    <p>We're working hard to get Clubhouse ready for everyone! While we wrap up the
                        finishing touches, we're adding people gradually to make sure nothing breaks.
                    </p>
                    <p>Anyone can join with an invite from an existing user or reserve their username
                        and we'll text you if you have a friend on the app who can let you in.
                        We are so grateful you're here and can't wait to have you join!
                    </p>
                    <small>Paul, Rohan & the Clubhouse team</small>
                </div>
                <Link to="/get_username" className="btn btn-primary btn-lg welcome_getusername">Get your username</Link>
                <Link to='/invite' id="welcome_signin_btn"><small>Have an invite text? Sign in</small></Link>
            </div>
        </div>
    )
}

export default Welcome

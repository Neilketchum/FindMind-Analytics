import React from 'react'
import './Signup.css'
import Checkbox from '@material-ui/core/Checkbox';

function Signin() {
    return (
        <div className = "Signup">
             <h1>Sign In</h1>
            <form>
                
                <label for="email">Email</label>
                <input type="email" autocomplete="off" id="email"/>
                <label for="password">Password</label>
                <input type="password" id="password"/>
                <div className = "signup__checkbox">
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p>I accept the terms & conditions </p>
                </div>
                
                <input type="submit" value="Sign In" id="submit"/>
            </form>
        </div>
    )
}

export default Signin

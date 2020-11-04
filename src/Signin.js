import React, { useState } from 'react'
import './Signup.css'
import Checkbox from '@material-ui/core/Checkbox';
import { Link,Redirect  } from "react-router-dom";
import { Button } from "@material-ui/core"
function Signin() {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("");
    const [user,setUser] = useState(false);
    const checkUser = (e)=>{
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("allEntries"))
        console.log(password)
        // console.log(user);
        var flag = 0;
        user.forEach((element) => {
            console.log(element.email,email)
            if(element.email === email && element.password === password){
                flag = 1;
            }
        });
        if(flag === 0){
            setEmail("");
            setpassword("");
            alert("Incorect Credentials")
        }
        else{
            setUser(true);
        }
    }
    return (
        <div className="Signup">
            <h1>Sign In</h1>
            <form onSubmit = {checkUser}>
                <label for="email">Email</label>
                <input type="email" value = {email} onChange = {(e)=>setEmail(e.target.value)} autocomplete="off" id="email" />
                <label for="password">Password</label>
                <input type="password" value = {password} onChange = {(e)=>setpassword(e.target.value)} id="password" />
                <div className="signup__checkbox">
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p>I accept the terms & conditions </p>
                </div>

                <div className="btns">
                    <Button  variant="contained" color="primary" type="submit" style={{ backgroundColor: "skyblue", padding: "10px", width: "40px" }}>
                        Sign In
                    </Button>
                    <Link to="/" className='text-link'><Button variant="contained" color="primary"  style={{ backgroundColor: "skyblue", padding: "10px", width: "40px" }}>
                        Sign Up
                    </Button></Link>

                </div>
            </form>
            {user?<Redirect to = '/main'/>:<></>}
        </div>
    )
}

export default Signin

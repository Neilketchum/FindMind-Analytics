import React, { useState, useEffect } from 'react'
import './Signup.css'
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";

function Signup() {
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const addUser = (e)=>{
        e.preventDefault()
        if(userName.length > 0 && email.length > 0 && password.length > 0){
            var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            if(existingEntries == null) existingEntries = [];
            var entry = {
                "userName":userName,
                "email":email,
                "password":password
            };
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
            setuserName("");
            setemail("");
            setpassword("");
            alert("sign up complete")
            
        }
    }
    return (
        <div className="Signup">
            <h1>Sign Up</h1>
            <form style={{ marginBottom: "21px" }} onSubmit = {addUser}>
                <label for="username">Username</label>
                <input type="text" autocomplete="off" id="username" onChange = {(e)=>setuserName(e.target.value)} value = {userName} />
                <label for="email">Email</label>
                <input type="email" autocomplete="off" id="email" onChange = {(e)=>setemail(e.target.value)} value = {email}/>
                <label for="password">Password</label>
                <input type="password" id="password" onChange = {(e)=>setpassword(e.target.value)} value = {password}/>
                <div className="signup__checkbox">
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p>I accept the terms & conditions </p>
                </div>

                {/* <input type="submit" value="" id="submit" /> */}
                <div className = "btns">
                    <Button variant="contained" color="primary" type="submit" style={{ backgroundColor: "skyblue", padding: "10px", width: "40px" }} >
                        Sign Up
                    </Button>
                    <Link to="/login" className='text-link'> <Button variant="contained" color="primary" style={{ backgroundColor: "skyblue", padding: "10px", width: "40px" }}>
                        Sign In
                    </Button></Link>
            
                </div>
               

            </form>
        </div>
    )
}

export default Signup

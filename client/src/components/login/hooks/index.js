import React from "react";
import "./styles.css"
import logo from "../res/googlelogo.svg"
import side from "../res/Side.svg"
import {Link} from "react-router-dom"

export default function Login(){
    return(
      <div className="body">
          <div class="Welcome">
          <h1 class="welcome">Welcome to SCRIBE</h1>
          <h2 class="please">Please Login to proceed</h2>
          <button ><img src={logo} alt="G" /> Login with Google<div></div></button>
      
          <form>
            <br/><br/>
            <label class ="emailinput" for="Email">Email</label>
            <br/>
            <input type="email" id ="email" name="email" placeholder="example@test.com" />

            <br/>

            <br/><br/>
            <label  class ="passinput" for="password">Password</label><br/>
            <input type="password" class ="password" name="password" placeholder="Password" /><br/><br/>
             <div className="flexbox">
             <div className="flexbox"> 
             </div>
             
            <label class= "forgot" for="ForgotPw">Forgot Password</label>
             </div>
          </form><br/>
          <button>Login</button>
          <p>Don't have an account? <strong><a href="http://">Sign up</a></strong></p>
        </div>
       <aside>
          <img src={side} className="side"/>
        </aside>
      </div>
    );
}
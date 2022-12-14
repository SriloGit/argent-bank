import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiPost, apiPostProfile } from "../../services/api";

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const emailChange = (e) =>{
    setEmail(e.target.value)
  }
  const passwordChange = (e) =>{
    setPassword(e.target.value)
  }
  const signIn = (e) =>{
    e.preventDefault()
   apiPost("/user/login", {email:email, password:password}).then((response) => { 
    localStorage.setItem("token", response.data.body.token)
    apiPostProfile("/user/profile", response.data.body.token).then((response) => {
      console.log(response)
    })
   })
  }
   

  return (
    <main className="main bg-darkpurple">
    <section className="sign-in-content">
      <div className="card card-container">        
        <i alt="profile-img"
          className="fa fa-user-circle sign-in-icon" />        
        <h1>Sign In</h1>
        <form >
          <input type="text" onChange={emailChange}/>
          <input type="password" onChange={passwordChange}/>
          <button onClick={signIn}>
            SignIn
          </button>
        </form>
      </div>
        <div className="input-wrapper">
          <div className="alert alert-danger" role="alert">            
          </div>
        </div>
    </section>
    </main>
  );
};

export default Login;
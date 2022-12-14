import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import { apiPost, apiPostProfile } from "../../services/auth.service";
import { userProfile } from "../../slices/profile";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;

    setLoading(true);

    apiPost("/user/login", {email:username, password:password}).then((response) => { 
      localStorage.setItem("token", response.data.body.token)
      apiPostProfile("/user/profile", response.data.body.token).then((response) => {        
        dispatch(userProfile(response.data.body))
        localStorage.setItem("firstName", response.data.body.firstName)
        localStorage.setItem("lastName", response.data.body.lastName)
      })
     })
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/user");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  return (
    <main className="main bg-darkpurple">
    <section className="sign-in-content">
      <div className="card card-container">
        <i
          alt="profile-img"
          className="fa fa-user-circle sign-in-icon"
        />        
        <h1>Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
                <button
                  type="submit"
                  className="sign-in-button"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign In</span>
                </button>
            </Form>
          )}
        </Formik>
      </div>
      

      {message && (
        <div className="input-wrapper">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </section>
    </main>
  );
};

export default Login;
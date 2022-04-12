import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { name, email, password, password2 } = formData;

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          &nbsp;Register
        </h1>
        <p>Please create an account</p>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                className="form-control"
                id="password2"
                type="password"
                name="password2"
                value={password2}
                placeholder="Confirm your password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Register" className="btn btn-block" />
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;

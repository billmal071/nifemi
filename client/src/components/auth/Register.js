import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Swal from "sweetalert2";

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  const { name, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/admin')
    }
    if (error === 'User already exists') {
      console.error(error)
      Swal.fire({
        icon: "error",
        text: `${error}`
      })
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, props.history, isAuthenticated]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || password === '') {
      console.log('Please enter all fields', 'danger')
      Swal.fire({
        icon: "info",
        text: "Please enter all fields"
      })
    } else {
      register({
        name,
        password
      })
    }
  }

  return (
    <div className="container my-5 text-center">
      <h1>
        Account <span className="text">Register</span>
      </h1>
      <form action="" onSubmit={onSubmit} className="my-5">
        <div className="form-group">
          <label htmlFor="name">Name:</label> <br/>
          <input type="text" name="name" value={name} onChange={onChange} required  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label> <br/>
          <input type="password" name="password" value={password} onChange={onChange} required minLength={6}  />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Register

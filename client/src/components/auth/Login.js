import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Swal from 'sweetalert2';

const Login = (props) => {

  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    userName: '',
    password: ''
  });

  const { userName, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/admin')
    }
    if (error) {
      Swal.fire({
        icon: 'error',
        text: `${error}`
      })
      clearErrors();
    }
    if (error === 'Invalid username or password.') {
      console.log(error)
      Swal.fire({
        icon: 'error',
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
    if (userName === '' || password === '') {
      Swal.fire({
        icon: "error",
        text: `Enter your credentials`,
      });
    } else {
      login({
        userName,
        password
      })
    }
  }

  return (
    <div className="container my-5 text-center">
      <h1>
        Account <span className="text">Login</span>
      </h1>
      <form action="" method="post" onSubmit={onSubmit} className="my-5">
        <div className="form-group">
          <label htmlFor="userName">Email Address:</label> <br/>
          <input type="text" name="userName" value={userName} onChange={onChange} required  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label> <br/>
          <input type="password" name="password" value={password} onChange={onChange} required  />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Login
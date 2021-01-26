import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = props => {
  const initialState = {
    token: window.localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      // live: https://nifemi-backend.herokuapp.com/
      // local: http://localhost:3300/api/v1
      const res = await axios.get('https://nifemi-backend.herokuapp.com/api/v1/user/login');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      })
    }
  }

  // register user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('https://nifemi-backend.herokuapp.com/api/v1/user/register', formData, config);
      console.log(res)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      console.log(res.data)
      await loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  }

  // login user
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('https://nifemi-backend.herokuapp.com/api/v1/user/login', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      //console.log(res.data)
      await loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
      console.log(err)
    }
  }

  // logout user
  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  // clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;
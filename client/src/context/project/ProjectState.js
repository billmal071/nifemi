import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  PROJECT_ERROR,
  GET_PROJECTS,
  CLEAR_PROJECTS
}
  from '../types';

const ProjectState = props => {
  const initialState = {
    projects: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // get project
  const getProjects = async () => {
    try {
      const res = await axios.get('http://localhost:3300/api/v1/project/');
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response
      })
    }
  }

  // add project
  const addProject = async (project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:3300/api/v1/project', project, config);
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data
      })
    }
  }

  // update project
  const updateProject = async (id, project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`http://localhost:3300/api/v1/project/${id}`, project, config);
      dispatch({
        type: UPDATE_PROJECT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data
      })
    }
  }

  // delete project
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:3300/api/v1/project/${id}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data
      })
    }
  }

  const clearProjects = () => {
    dispatch({
      type: CLEAR_PROJECTS
    })
  }

  // set current project
  const setCurrent = (project) => {
    dispatch({
      type: SET_CURRENT,
      payload: project
    });
  }

  // clear current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  }

  // filter project
  const filterProject = (text) => {
    dispatch({
      type: FILTER_PROJECTS,
      payload: text
    });
  }

  // clear filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  }

  return (
    <ProjectContext.Provider value={
      {
        projects: state.projects,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getProjects,
        addProject,
        deleteProject,
        updateProject,
        setCurrent,
        clearCurrent,
        filterProject,
        clearFilter,
        clearProjects
      }
    } > {
      props.children
    }
    </ProjectContext.Provider>
  )
}

export default ProjectState;
import React, { useEffect, useReducer } from 'react'
import { useLocation } from 'react-router-dom';
import MainDashboard from './MainDashboard';
import "./FacultyProfile.css"
import NavbarDash from './MIscComponents/NavbarDash';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_BEGIN':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
    }
  };

const UserProfile = () => {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    data: {},
  });
  useEffect(() => {
    const fetchFaculty = async () => {
      dispatch({ type: 'FETCH_BEGIN' });
      try {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: JSON.parse(localStorage.getItem('data')),
        });
        console.log('userr', data);
      } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_FAIL', payload: error.msg });
      }
    };
    fetchFaculty();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="main-content">
            <NavbarDash />
          <MainDashboard data={data} />
        </div>
      )}
    </>
  )
}

export default UserProfile
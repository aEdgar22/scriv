import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/thunks/authUserThunk';

export const HomeScreen = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logOut());
    };
  return (
    <button onClick={handleLogout}>logout</button>
  )
}

import React from 'react';
// cspell:ignore Toastify
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar-temp'; // Make sure this path is correct
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout;

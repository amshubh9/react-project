import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
            </NavLink>
            
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/HomePage"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-white hover:bg-gray-900 hover:text-white'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-white hover:bg-gray-900 hover:text-white'
                    }`
                  }
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-white hover:bg-gray-900 hover:text-white'
                    }`
                  }
                >
                  Add Job
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

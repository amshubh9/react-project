import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import ViewAllJobs from './components/ViewAllJob';
import MainLayout from './layouts/MainLayout';
import JobPage from './pages/JobPage';
import NotFound from './pages/NotFound';
import JobPages from './pages/JobPages';
import AddJobPage from './pages/AddJobPage';

const App = () => {
    const addJob=async(newJob)=>{
       const res=await fetch('/api/jobs',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(newJob),
        
       });
       
    }
    //Delete Job
    const deleteJob=async(id)=>{
      console.log('delete',id);
    };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPages deleteJob={deleteJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

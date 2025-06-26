import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinners from '../components/Spinners';

const JobPages = (deleteJob) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <Spinners loading={loading} />;
  if (!job) return <p>Job not found.</p>;

  return <h1>{job.title}</h1>;
};

export default JobPages;

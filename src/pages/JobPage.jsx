import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();
  const jobs  = useLoaderData();
   return <h1>{ jobs }</h1>;
};

const jobLoader = async ({ params }) => {
  //  const res = await fetch(`/api/jobs/${params.id}`);
  // const data = await res.json();
  // const job = data.jobs.find(job => job.id === params.id);
  // src/data/jobs.js
const jobs = [
  {
    id: "1",
    title: "Senior React Developer",
    type: "Full-Time",
    description: "We are looking for a senior React developer with 3+ years experience.",
  },
  {
    id: "2",
    title: "Junior Frontend Developer",
    type: "Part-Time",
    description: "Entry-level frontend role for enthusiastic developers.",
  },
  {
    id: "3",
    title: "Backend Developer",
    type: "Full-Time",
    description: "Looking for a Node.js / Express developer.",
  }
];


  console.log(jobs);
  return jobs;
}

export { JobPage as default, jobLoader };
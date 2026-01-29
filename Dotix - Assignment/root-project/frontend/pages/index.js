import { useEffect, useState } from 'react';
import { getJobs, createJob, runJob } from '../services/api';
import JobTable from '../components/JobTable';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  const load = async () => setJobs(await getJobs());

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Job Scheduler</h2>
      <button onClick={async () => { await createJob(); load(); }}>
        Create Job
      </button>
      <JobTable jobs={jobs} onRun={async id => { await runJob(id); load(); }} />
    </div>
  );
}
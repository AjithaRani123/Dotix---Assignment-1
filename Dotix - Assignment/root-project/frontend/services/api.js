const BASE = 'http://localhost:5000/jobs';

export const getJobs = () => fetch(BASE).then(r => r.json());
export const createJob = () =>
  fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      taskName: 'Sample Job',
      priority: 'High',
      payload: { test: true }
    })
  });

export const runJob = (id) =>
  fetch(`${BASE}/run/${id}`, { method: 'POST' });
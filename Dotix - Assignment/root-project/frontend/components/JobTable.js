export default function JobTable({ jobs, onRun }) {
  return (
    <table border="1">
      <thead>
        <tr><th>ID</th><th>Task</th><th>Status</th><th>Action</th></tr>
      </thead>
      <tbody>
        {jobs.map(j => (
          <tr key={j.id}>
            <td>{j.id}</td>
            <td>{j.taskName}</td>
            <td>{j.status}</td>
            <td>
              {j.status === 'pending' &&
                <button onClick={() => onRun(j.id)}>Run</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
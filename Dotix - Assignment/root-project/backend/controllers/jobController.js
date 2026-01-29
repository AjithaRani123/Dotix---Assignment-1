const db = require('../database/db');
const webhook = require('../services/webhookService');

exports.createJob = async (req, res) => {
  const { taskName, payload, priority } = req.body;
  await db.query(
    `INSERT INTO jobs (taskName,payload,priority,status)
     VALUES (?,?,?,'pending')`,
    [taskName, JSON.stringify(payload), priority]
  );
  res.json({ message: 'Job created' });
};

exports.getJobs = async (_, res) => {
  const [rows] = await db.query('SELECT * FROM jobs');
  res.json(rows);
};

exports.getJob = async (req, res) => {
  const [[job]] = await db.query('SELECT * FROM jobs WHERE id=?', [req.params.id]);
  res.json(job);
};

exports.runJob = async (req, res) => {
  const id = req.params.id;
  await db.query('UPDATE jobs SET status="running" WHERE id=?', [id]);

  setTimeout(async () => {
    await db.query(
      'UPDATE jobs SET status="completed", completedAt=NOW() WHERE id=?',
      [id]
    );
    const [[job]] = await db.query('SELECT * FROM jobs WHERE id=?', [id]);
    webhook.send(job);
  }, 3000);

  res.json({ message: 'Job running' });
};
const router = require('express').Router();
const c = require('../controllers/jobController');

router.post('/', c.createJob);
router.get('/', c.getJobs);
router.get('/:id', c.getJob);
router.post('/run/:id', c.runJob);

module.exports = router;
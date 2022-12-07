const router = require('express').Router();
require('../controllers/Users');

router.get('/', (req, res) => getUsers(req, res));

router.post('/', (req, res) => validateUser(req, res));

router.post('/add', (req, res) => createUser(req, res));

router.put('/update/:id', (req, res) => updateUser(req, res));

router.put('/activate/:id', (req, res) => activateUser(req, res));

router.delete('/delete/:id', (req, res) => deleteUser(req, res));

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.get('/', userController.getAllUsers);
router.get('/create', userController.getCreateUserForm);
router.post('/add', userController.addUser);

module.exports = router;

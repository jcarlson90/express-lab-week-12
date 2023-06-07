const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/users', userController.createUser)
router.post('/users', userController.loginUser)
router.put('/users:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)
router.get('/users',)
router.post('/users/logout',)

module.exports = router
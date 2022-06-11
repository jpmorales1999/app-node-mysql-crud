const { Router } = require('express')

const router = Router()

// Controller
const { listCustomer, saveCustomer, deleteCustomer, editCustomer, updateCustomer } = require('../controllers/customerController')

router.get('/', listCustomer)

router.post('/add', saveCustomer)

router.get('/update/:id', editCustomer)

router.post('/update/:id', updateCustomer)

router.get('/delete/:id', deleteCustomer)

module.exports = router
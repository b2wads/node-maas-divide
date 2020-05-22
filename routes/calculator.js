const router = require('express').Router()
const CalculatorController = require('../controllers/calculator-controler')

router.post('/api/v1/calculator/divide', CalculatorController.divide)

module.exports = router
// /api/v1/calculator/divide

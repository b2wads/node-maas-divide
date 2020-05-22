const router = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')
const CalculatorRoutes = require('./calculator')

router.use('/healthcheck', HealthcheckRoutes)
router.use('/', CalculatorRoutes)

module.exports = router

const express = require('express')

const {createDriver, deleteDriver, getAllDrivers, getDriver, updateDriver} = require('../controllers/drivers.js')

const router = express.Router()

router.get('/', getAllDrivers)

router.post('/', createDriver)

router.get('/:id', getDriver, (req, res) => {
    res.send(res.driver)
})

router.delete('/:id', getDriver, deleteDriver) 

router.patch('/:id', getDriver, updateDriver)

module.exports = router;
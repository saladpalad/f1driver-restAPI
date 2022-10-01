import express from 'express'
import { createDriver, deleteDriver, getAllDrivers, getDriver, updateDriver } from '../controllers/drivers.js'

const router = express.Router()

router.get('/', getAllDrivers)

router.post('/', createDriver)

router.get('/:id', getDriver)

router.delete('/:id', deleteDriver) 

router.patch('/:id', updateDriver)

export default router;
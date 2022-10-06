const Driver = require('../models/driver.js')

exports.getAllDrivers = async (req, res) => {
    try{
        const drivers = await Driver.find()
        res.json(drivers)
    }catch (err) {
        res.status(500).json({ message: err.message})
    }
}

exports.createDriver = async (req, res) => {
    const driver = new Driver({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        constructorTeam: req.body.constructorTeam,
        driverStanding2022: req.body.driverStanding2022
    })
    try{
        const newDriver = await driver.save()
        res.status(201).json(newDriver)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}

exports.getDriver = async (req, res, next) => {
    let driver
    try{
        driver  = await Driver.findById(req.params.id)
        if(driver == null){
            return res.status(404).json({ message: 'Cannot find F1 Driver' })
        }
    }catch (err){
        return res.status(500).json({ message: err.message })
    }
    res.driver = driver
    next()
}

exports.deleteDriver = async (req, res) => {
   try{
    await res.driver.remove()
    res.json({message: `Deleted ${res.driver.firstName} from the database`})
   }catch (err){
    res.status(500).json({message: err.message})
   }
}

exports.updateDriver = async (req, res) => {
    if(req.body.firstName != null) res.driver.firstName = req.body.firstName

    if(req.body.lastName != null) res.driver.lastName = req.body.lastName

    if(req.body.age != null) res.driver.age = req.body.age

    if(req.body.constructorTeam != null) res.driver.constructorTeam = req.body.constructorTeam

    if(req.body.driverStanding2022 != null) res.driver.driverStanding2022 = req.body.driverStanding2022

    try{
        const updatedDriver = await res.driver.save()
        res.json(updatedDriver)
    } catch (err){
        res.status(400).json({ message: err.message })
    }



}
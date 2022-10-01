import { v4 as uuidv4 } from 'uuid';
let drivers = []
uuidv4();

export const getAllDrivers = (req, res) => {
    res.send(drivers)
}

export const createDriver = (req, res) => {
    const driver = req.body

    drivers.push({ ...driver, id: uuidv4()})

    res.send(`Driver with the name ${driver.firstName} added to the database!`)
}

export const getDriver = (req, res) => {
    const {id} =  req.params

    const foundDriver = drivers.find((driver) => driver.id == id)

    res.send(foundDriver)
}

export const deleteDriver = (req, res) => {
    const {id} = req.params

    drivers = drivers.filter((driver) => driver.id != id)

    res.send(`Driver with the id: ${id} has been deleted from the database!`)
}

export const updateDriver = (req, res) => {
    const {id} = req.params
    const { firstName, lastName, age, constructorId, driverStanding2022} = req.body
    const updatedDriver = drivers.find((driver) => driver.id == id)


    if(firstName) updatedDriver.firstName = firstName

    if(lastName) updatedDriver.lastName = lastName

    if(age) updatedDriver.age = age

    if(constructorId) updatedDriver.constructor = constructor

    if(driverStanding2022) updatedDriver.driverStanding2022 = driverStanding2022

    res.send(`Driver with the id: ${id} has been updated!`)

}
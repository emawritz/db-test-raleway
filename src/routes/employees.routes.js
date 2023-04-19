import { Router } from 'express';
import { getEmployees,createEmployees, deleteEmployees, editEmployees, getEmployeeById } from '../controllers/employees.controller.js'

const router =  Router()

router.get('/employes', getEmployees)
router.get('/employes/:id', getEmployeeById)
router.post('/employes', createEmployees)
router.patch('/employes/:id', editEmployees)
router.delete('/employes/:id', deleteEmployees)


export default router
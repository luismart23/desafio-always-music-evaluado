import { Router } from "express";
import { createEstudiante, getEstudiante, getAllEstudiantes, updateEstudiante, removeEstudiante } from "../controllers/estudiante.controller.js";

const router = Router()

// URL /Estudiantes
router.post('/', createEstudiante)
router.get('/:id', getEstudiante)
router.get('/', getAllEstudiantes)
router.put('/:id', updateEstudiante)
router.delete('/:id', removeEstudiante)

export default router
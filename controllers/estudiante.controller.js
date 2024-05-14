import { nanoid } from "nanoid"
import { Estudiante } from "../models/estudiante.model.js"

export const getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const getEstudiante = async (req, res) => {
    // console.log(req.params)
    try {
        const { id } = req.params
        // validar que tenga formato nanoid???
        const estudiante = await Estudiante.findOneById(id)
        if (!estudiante) {
            return res.status(404).json({ ok: false, msg: '404' })
        }
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const createEstudiante = async (req, res) => {
    try {
        const { nombre, curso, nivel } = req.body

        if (!nombre || !curso || !nivel) {
            return res.status(400).json({ ok: false, msg: "Todos los campos son obligatorios" })
        }

        const newEstudiante = {
            id: nanoid(),
            nombre,
            curso,
            nivel,
        }

        const estudiante = await Estudiante.create(newEstudiante)
        return res.status(201).json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, msg: "Error del servidor" })
    }
}



export const removeEstudiante = async (req, res) => {
    console.log(req.params)
    try {
        const { id } = req.params
        const estudiante = await Estudiante.remove(id)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const updateEstudiante = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    try {
        const { id } = req.params
        const { nombre, curso, nivel } = req.body
        const estudiante = await Estudiante.update({
            id,
            nombre,
            curso,
            nivel,
        })
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
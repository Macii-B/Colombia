const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Destino = require('../models/Destino');

// Validación común para crear y actualizar
const validacionDestino = [
    body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
    body('descripcion').trim().notEmpty().withMessage('La descripción es obligatoria'),
    body('region').isIn(['Caribe', 'Andina', 'Pacífica', 'Orinoquía', 'Amazonía'])
        .withMessage('Región no válida'),
    body('imagen').isURL().withMessage('La URL de la imagen no es válida'),
    body('clima').trim().notEmpty().withMessage('La información del clima es obligatoria'),
    body('mejorEpoca').trim().notEmpty().withMessage('La mejor época es obligatoria')
];

// GET todos los destinos
router.get('/', async (req, res) => {
    try {
        const destinos = await Destino.find();
        res.json(destinos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los destinos', error: error.message });
    }
});

// GET un destino específico
router.get('/:id', async (req, res) => {
    try {
        const destino = await Destino.findById(req.params.id);
        if (!destino) {
            return res.status(404).json({ mensaje: 'Destino no encontrado' });
        }
        res.json(destino);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el destino', error: error.message });
    }
});

// POST crear nuevo destino
router.post('/', validacionDestino, async (req, res) => {
    try {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }

        const nuevoDestino = new Destino(req.body);
        await nuevoDestino.save();
        res.status(201).json(nuevoDestino);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el destino', error: error.message });
    }
});

// PUT actualizar destino
router.put('/:id', validacionDestino, async (req, res) => {
    try {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }

        const destino = await Destino.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!destino) {
            return res.status(404).json({ mensaje: 'Destino no encontrado' });
        }

        res.json(destino);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el destino', error: error.message });
    }
});

// DELETE eliminar destino
router.delete('/:id', async (req, res) => {
    try {
        const destino = await Destino.findByIdAndDelete(req.params.id);
        if (!destino) {
            return res.status(404).json({ mensaje: 'Destino no encontrado' });
        }
        res.json({ mensaje: 'Destino eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el destino', error: error.message });
    }
});

module.exports = router; 
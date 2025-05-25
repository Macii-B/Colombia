const mongoose = require('mongoose');

const destinoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del destino es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    },
    region: {
        type: String,
        required: [true, 'La región es obligatoria'],
        enum: ['Caribe', 'Andina', 'Pacífica', 'Orinoquía', 'Amazonía']
    },
    imagen: {
        type: String,
        required: [true, 'La URL de la imagen es obligatoria']
    },
    actividades: [{
        type: String,
        trim: true
    }],
    clima: {
        type: String,
        required: [true, 'La información del clima es obligatoria']
    },
    mejorEpoca: {
        type: String,
        required: [true, 'La mejor época para visitar es obligatoria']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Destino', destinoSchema); 
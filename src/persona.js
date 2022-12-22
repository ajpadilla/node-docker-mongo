const { Schema, model } = require('mongoose');

const PersonaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    cedula: {
        type: String,
        required: [true, 'La cedula es obligatoria']
    }
});

module.exports = model('Persona', PersonaSchema);
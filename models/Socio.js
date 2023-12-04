const mongoose = require('mongoose');

const SocioSchema = mongoose.Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    perfil: {type: String, default: 'perfil.png', required: true},
    telefono: {type: String, required: true},
    genero: {type: String, required: true},
    direccion: {type: String, required: true},
    cargo: {type: String, required: true},
    f_nacimiento: {type: String, required: true},
    dni: {type: String, required: true},
    isActive: {type: Boolean,default: false}, // Valor por defecto: false
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('socio',SocioSchema);
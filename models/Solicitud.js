const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SolicitudSchema = mongoose.Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: String, required: true},
    genero: {type: String, required: true},
    direccion: {type: String, required: true},
    cargo: {type: String, required: true},
    f_nacimiento: {type: String, required: true},
    dni: { type: String, required: true, unique: true },
    documentoEssalud: { type: String, required:true},
    createdAt: {type: Date, default: Date.now, required: true}
});

SolicitudSchema.index({ dni: 1 }, { unique: true });
SolicitudSchema.plugin(uniqueValidator);

module.exports = mongoose.model('solicitud',SolicitudSchema);
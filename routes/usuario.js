const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/authenticate');

router.post('/registro_socio',usuarioController.registro_socio);
router.post('/login_socio',usuarioController.login_socio);
router.get('/listar_socios_filtro_admin/:tipo/:filtro',auth.auth,usuarioController.listar_socios_filtro_admin);
router.post('/registro_socio_admin',auth.auth,usuarioController.registro_socio_admin);
router.get('/obtener_socio_admin/:id',auth.auth,usuarioController.obtener_socio_admin);
router.put('/actualizar_socio_admin/:id',auth.auth,usuarioController.actualizar_socio_admin);
router.put('/actualizar_estado_socio_admin/:id',auth.auth,usuarioController.actualizar_estado_socio_admin);
router.post('/registro_admin',usuarioController.registro_admin);
router.post('/login_admin',usuarioController.login_admin);
router.get('/obtener_socio_guest/:id',auth.auth,usuarioController.obtener_socio_guest);
router.get('/obtenerEstadoActivoSocio/:id',usuarioController.obtenerEstadoActivoSocio);

module.exports = router;
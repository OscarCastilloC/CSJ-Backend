const express = require('express');
const router = express.Router();

const solicitudController = require('../controllers/solicitudController');
const auth = require('../middlewares/authenticate');
const multiparty =  require('connect-multiparty');
const path = multiparty({uploadDir: './uploads/solicitudes'});

router.post('/registro_solicitud',path,solicitudController.registro_solicitud);
router.get('/listar_solicitudes_filtro_admin/:tipo/:filtro',auth.auth,solicitudController.listar_solicitudes_filtro_admin);
router.get('/obtener_solicitud_admin/:id',auth.auth,solicitudController.obtener_solicitud_admin);

module.exports = router;
const Solicitud = require ("../models/Solicitud");

exports.registro_solicitud = async (req, res) => {
    try {
        let data = req.body;
        // Manejo de la imagen
        if (req.files && req.files.documentoEssalud) {
            var documentoEssalud_path = req.files.documentoEssalud.path;
            var name = documentoEssalud_path.split('\\');
            var documentoEssalud_name = name[name.length - 1];
            data.documentoEssalud = documentoEssalud_name;
        }

        let nuevaSolicitud = await Solicitud.create(data);
        res.status(200).json({ message: 'Solicitud registrada correctamente', data: nuevaSolicitud });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.dni) {
            return res.status(400).json({ message: 'El DNI ya está en uso, ingrese uno único' });
        }
        res.status(500).json({ message: 'Error al registrar la solicitud', error: error.message });
    }
};

exports.listar_solicitudes_filtro_admin = async (req,res) => {

    if (req.user) {
        if (req.user.role == 'admin') {
            let tipo = req.params['tipo'];
            let filtro = req.params['filtro'];

            console.log(tipo);

            if (tipo == null || tipo == 'null') {
                let reg = await Solicitud.find();
                res.status(200).send({data:reg});
            }

            else {
                //Filtro
                if (tipo == 'dni') {
                    let reg = await Solicitud.find({apellidos: new RegExp(filtro,'i')});
                    res.status(200).send({data:reg});
                }
                else if (tipo == 'correo') {
                    let reg = await Solicitud.find({email: new RegExp(filtro,'i')});
                    res.status(200).send({data:reg});
                }
            }
        }

        else {
                res.status(500).send({message: 'No tiene acceso'});
        }
    }

    else {
        res.status(500).send({message: 'No tiene acceso'});
    }
};

exports.obtener_solicitud_admin = async (req,res) => {
    if (req.user) {
     if (req.user.role == 'admin') {
       
       var id = req.params['id'];

       try {
           var reg = await Solicitud.findById({_id:id});

           res.status(200).send({data:reg});

       }

       catch (err) {
           res.status(200).send({data:undefined});
       }

     } else {
       res.status(500).send({ message: 'No tiene acceso' });
     }
   } else {
     res.status(500).send({ message: 'No tiene acceso' });
   }
};
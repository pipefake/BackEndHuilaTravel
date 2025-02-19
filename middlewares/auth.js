import jwt from 'jwt-simple';
import moment from 'moment';
import { secret } from '../services/jwt.js';

export const ensureAuth = (req, res, next) => {

    //Comprobar si llega la cabecera de autentificación
    if (!req.headers.authorization) {
        return res.status(403).send({
            status: "error",
            message: "La petición no tiene la cabecera de autentificación"
        });
    }

    //Limpiar el token y quitar comillas si las hay
    const token = req.headers.authorization.replace(/['"]+/g, '').replace("Bearer ", "");


    try {
        //Decodificar el token
        let payload = jwt.decode(token, secret);

        //Comprobar si el token ha expirado (si la fecha de expiración es mas antigua que la fecha actual)
        if (payload.exp <= moment.unix()) {
            return res.status(401).send({
                status: "error",
                message: "El token ha expirado"
            })
        }
        req.user = payload;

    } catch {
        return res.status(404).send({
            status: "error",
            message: "El token no es válido"
        })

    }
    //Paso a ejecución al siguiente método
    next();
}
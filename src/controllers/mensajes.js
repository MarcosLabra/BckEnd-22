import {normalize, denormalize, schema} from 'normalizr';



const user = new schema.Entity('user');
const mensaje = new schema.Entity('mensaje');
const mensajes = new schema.Entity('mensaje', {
    author: user,
    mensajes: [mensaje]
});

const normalizeMsj = (msj) => {
    const normalizedMensaje = normalize(msj, mensaje);
    console.log(normalizedMensaje);
}

export { normalizeMsj };

import { normalize, schema } from 'normalizr';

const authorsSchema = new schema.Entity('authors');
const msjSchema = new schema.Entity('mensajes', { author: authorsSchema }, { idAttribute: 'id' });
const fileSchema = [msjSchema]

const normalizeMsj = (msj) => {
const normalizedMensaje = normalize(msj, fileSchema);
console.log(normalizedMensaje);
return normalizedMensaje;
}

export { normalizeMsj };

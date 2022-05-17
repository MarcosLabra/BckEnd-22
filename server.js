import express from 'express';
import routerProducto  from './src/routes/routes.js';
import cors from 'cors';
export const app = express();

app.use(cors())

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', routerProducto);


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));
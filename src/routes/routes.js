import { Router } from "express";
import { faker } from '@faker-js/faker';

const routerProducto = Router();

routerProducto.
    route('/productos-test')
    .get(async (req, res) => {

        const products = [];
        for (let i = 0; i < 5; i++) {
            const product = {
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl()
            }
            products.push(product);
        }
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(404).send({ message: "Productos no encontrado" });
        }
    })

export default routerProducto
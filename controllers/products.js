import { faker } from '@faker-js/faker';

export default createFakeProduct = async () => {
    const products = [];
    for (let i = 0; i < 5; i++) {
        const product = {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.imageUrl()
        }
        products.push(product);
    }
    return products;
}
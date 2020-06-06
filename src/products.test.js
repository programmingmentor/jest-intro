import products from './products.json';

test('products to match requirements', () => {
    expect(products).toMatchSnapshot();
});
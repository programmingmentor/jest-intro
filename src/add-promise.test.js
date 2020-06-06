import addPromise from './add-promise';

it('should check promise add', () => {
    const sum = addPromise(1, 2);
    return expect(sum).resolves.toBe(3);
});

// test('should check with async/await', async () => {
//     const sum = await addPromise(1, 2);
//     expect(sum).toBe(3);
// })
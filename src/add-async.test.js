import addAsync from './add-async';

test('add numbers async', done => {
    addAsync(1, 2, result => {
        expect(result).toBe(3);
        done();
    })
})

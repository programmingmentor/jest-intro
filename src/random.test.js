import random from './random';

test('should return random number', () => {
    const mathRandomSpy = jest.spyOn(Math, 'random');
    mathRandomSpy.mockImplementation( () => 0.5 );
    const randNum = random(0, 10);
    expect(randNum).toEqual(5);
    expect(mathRandomSpy).toHaveBeenCalledTimes(1);
});
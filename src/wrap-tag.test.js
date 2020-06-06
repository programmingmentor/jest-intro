import wrapTag from './wrap-tag';

test('if it wraps tag', () => {
    const wrappedCode = wrapTag('Hello World', 'h1');
    // expect(wrappedCode).toBe('<h1>Hello World</h1>');
    expect(wrappedCode).toMatchSnapshot();
});
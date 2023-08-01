import { triangleCheck } from '../src/challenges2';

describe('12 - Crie uma função que teste a condição de existência de um triângulo', () => {
  it('Retorne false quando a medida de um dos lados não é menor que a soma das medidas dos outros dois lados', () => {
    expect(triangleCheck(16, 9, 2)).toBe(false);
    expect(triangleCheck(3, 10, 4)).toBe(false);
    expect(triangleCheck(2, 2, 6)).toBe(false);
  });

  it('Retorne false quando a medida de um dos lados não é maior que o valor absoluto da diferença entre as medidas dos outros dois lados', () => {
    expect(triangleCheck(10, 13, 2)).toBe(false);
    expect(triangleCheck(17, 4, 12)).toBe(false);
    expect(triangleCheck(3, 5, 10)).toBe(false);
  });

  it('Retorne true quando a medida de qualquer um dos lados é menor que a soma das medidas dos outros dois, ou a medida de um dos lados é menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferença entre essas medidas', () => {
    expect(triangleCheck(10, 14, 8)).toBe(true);
    expect(triangleCheck(2, 3, 4)).toBe(true);
    expect(triangleCheck(16, 20, 30)).toBe(true);
  });
});

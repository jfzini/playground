import { PhoneNumberFrequency } from './typings/types';

// Desafio 11 - Crie a função generatePhoneNumber
const checkInvalidNumber = (numArray: number[]): boolean => {
  for (const number of numArray) {
    if (number < 0 || number > 9) return false;
  }
  return true;
};

const checkNumberRepetition = (numArray: number[]): boolean => {
  const frequency: PhoneNumberFrequency = {};
  for (const number of numArray) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] >= 3) return false;
  }
  return true;
};

const generatePhoneNumber = (num: number[]): string => {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (!checkInvalidNumber(num) || !checkNumberRepetition(num)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${num[0]}${num[1]}) ${num.slice(2, 7).join('')}-${num.slice(7).join('')}`;
};

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA: number, lineB: number, lineC: number): boolean => {
  const largestSide = Math.max(lineA, lineB, lineC);
  const sumSides = lineA + lineB + lineC;
  if (largestSide > (sumSides - largestSide)) {
    return false;
  }
  return true;
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string: string): string => {
  const drinkDosesArr = string.split(/\D+/);
  drinkDosesArr.pop(); // removes the last empty string
  let cupsOfWater = 0;
  drinkDosesArr.forEach((drink) => {
    cupsOfWater += parseInt(drink, 10);
  });
  return cupsOfWater === 1 ? '1 copo de água' : `${cupsOfWater} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
export {
  generatePhoneNumber,
  triangleCheck,
  hydrate,
};

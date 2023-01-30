// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (numArray) => {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (const number of numArray) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (const number of numArray) {
    let frequency = 0;
    for (const numberRepetition of numArray) {
      if (number === numberRepetition) {
        frequency += 1;
      }
    }
    if (frequency >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = '';
  for (const numIndex in numArray) {
    if (numIndex === '0') {
      phoneNumber = `(${numArray[0]}`;
    } else if (numIndex === '1') {
      phoneNumber += `${numArray[1]}) `;
    } else if (numIndex === '6') {
      phoneNumber += `${numArray[6]}-`;
    } else {
      phoneNumber += numArray[numIndex];
    }
  }
  return phoneNumber;
};

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => {
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
    || (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
    || (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate
const sumArray = (numArray) => {
  let sum = 0;
  for (const number of numArray) {
    sum += number;
  }
  return sum;
};
const hydrate = (string) => {
  let cups = string.match(/\d+/g);
  if (cups.length === 1 && parseInt(cups, 10) === 1) {
    return '1 copo de água';
  }
  return `${sumArray(cups.map((numbers) => parseInt(numbers, 10)))} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};

import { Codes, TechList } from './typings/types';

// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1: boolean, param2: boolean): boolean => param1 && param2;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string: string): string | string[] =>
  typeof string === 'string' ? string.split(' ') : 'Invalid';

// Desafio 3 - Crie a função concatName

const concatName = (array: string[]): string => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins: number, ties: number): number => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (numArray: number[]): number => {
  const highestNumber = Math.max(...numArray);
  let repetition = 0;
  numArray.forEach((element) => {
    if (element === highestNumber) repetition += 1;
  });
  return repetition;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base: number, height: number): number => (base * height) / 2;

const calcRectangleArea = (base: number, height: number): number => base * height;

const calcAllAreas = (base: number, height: number, form: string): string => {
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse: number, cat1: number, cat2: number): string => {
  const cat1Diff = Math.abs(mouse - cat1);
  const cat2Diff = Math.abs(mouse - cat2);
  if (cat1Diff < cat2Diff) return 'cat1';
  if (cat1Diff > cat2Diff) return 'cat2';
  if (cat1Diff === cat2Diff) return 'os gatos trombam e o rato foge';
  return 'Invalid';
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numArray: number[]): string[] =>
  numArray.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return 'bug!';
  });

// Desafio 9 - Crie a função encode e a função decode

const encode = (string: string): string => {
  const codes: Codes = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  const encoded = string.split('').map((character: string) => codes[character] || character);
  return encoded.join('');
};

const decode = (string: string): string => {
  const codes: Codes = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  };
  const decoded = string.split('').map((character) => codes[character] || character);
  return decoded.join('');
};

// Desafio 10 - Crie a função techList

const techList = (array: string[], name: string): TechList[] =>
  array.sort().map((tech) => ({ tech, name }));

export {
  calcTriangleArea,
  calcRectangleArea,
  calcAllAreas,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

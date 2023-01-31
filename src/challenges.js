// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => {
  if (param1 && param2) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => {
  if (typeof string === 'string') {
    const resultado = string.split(' ');
    return resultado;
  }
  return 'Invalid';
};

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount
// const checkHighestNumber = (numArray) => {
//   let highestNumber = numArray[0];
// }

const highestCount = (numArray) => {
  let highestNumber = numArray[0];
  let highestNumberTimes = 0;
  for (let indexArray = 0; indexArray < numArray.length; indexArray += 1) {
    if (numArray[indexArray] > highestNumber) {
      highestNumberTimes = 0;
      highestNumber = numArray[indexArray];
    }
    if (numArray[indexArray] === highestNumber) {
      highestNumberTimes += 1;
    }
  }
  return highestNumberTimes;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Invalid';
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numArray) =>
  numArray.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    }
    if (number % 3 === 0) {
      return 'fizz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => { //  https://www.youtube.com/watch?v=G3BS3sh3D8Q&ab_channel=ProgrammingwithMosh
  let codes = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  const encoded = string.split('').map((character) => (codes[character] || character));
  return encoded.join('');
};

const decode = (string) => { //  https://www.youtube.com/watch?v=G3BS3sh3D8Q&ab_channel=ProgrammingwithMosh
  let codes = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const decoded = string.split('').map((character) => (codes[character] || character));
  return decoded.join('');
};

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let objectArray = [];
  for (const skills of array.sort()) {
    objectArray.push({
      tech: skills,
      name: string,
    });
  }
  return objectArray;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};

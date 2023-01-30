// Desafio 1 - Crie a função compareTrue

const girafa = true;
const elefante = false;
const macaco = false;


const compareTrue = (param1, param2) => {
  if (param1 == true && param2 == true) {
    return true;
  } else if (param1 == true && param2 == false) {
    return false;
  } else if (param2 == true && param1 == false) {
    return false;
  } else if (param1 == false && param2 == false) {
    return false;
  }
  return 'Invalid';
}

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => {
  if (typeof string == 'string') {
    const resultado = string.split(' ');
    return resultado;
  }
  return 'Invalid';
}

// Desafio 3 - Crie a função concatName

const concatName = (array) => array[array.length - 1] + ', ' + array[0];

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) =>  wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (numArray) => {
  let highestNumber = numArray[0];
  let highestNumberTimes = 0;
  for (const number of numArray) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  };
  for (const number of numArray) {
    if (number === highestNumber) {
      highestNumberTimes += 1;
    }
  };
  return highestNumberTimes;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => base * height / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'retângulo') {
    return 'O valor da área do retângulo é de: ' + calcRectangleArea(base, height) + '.';
  } else if (form === 'triângulo'){
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(base, height) + '.';
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida.'
}

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Invalid';
}

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numArray) => {
  const stringArray = [];
  for (const number of numArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      stringArray.push('fizz');
    } else if (number % 5 === 0) {
      stringArray.push('buzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  let encoded = '';
  for (const character of string) {
    if (character === 'a') {
      encoded = encoded + '1';
    } else if (character === 'e') {
      encoded = encoded + '2';
    } else if (character === 'i') {
      encoded = encoded + '3';
    } else if (character === 'o') {
      encoded = encoded + '4';
    } else if (character === 'u') {
      encoded = encoded + '5';
    } else {
      encoded = encoded + character;
    }
  }
  return encoded;
}

const decode = (string) => {
  let decoded = '';
  for (const character of string) {
    if (character === '1') {
      decoded = decoded + 'a';
    } else if (character === '2') {
      decoded = decoded + 'e';
    } else if (character === '3') {
      decoded = decoded + 'i';
    } else if (character === '4') {
      decoded = decoded + 'o';
    } else if (character === '5') {
      decoded = decoded + 'u';
    } else {
      decoded = decoded + character;
    }
  }
  return decoded;
}

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let objectArray = [];
  for (const skills of array.sort()) {
    objectArray.push({
      tech: skills,
      name: string
    })
  }
  return objectArray;
}
console.log(techList([''], 'Lucas'));

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

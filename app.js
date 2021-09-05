
let number1;
let number2;
let operate;

function setOperate () {
  operate = prompt('Введите операцию (+, -, /, *.)');
}

function setNnumber1 () {
  number1 = prompt('Введите число');
}

function setNnumber2 () {
  number2 = prompt('Введите число');
}

const resultatOperation = function (operantL1, operantR2, operate) {
  if (operate === '+' ) {
    return  operantL1 + operantR2 ;
  }
  else if (operate === '-' ) {
    return  operantL1 - operantR2 ;
  }
  else if (operate === '/' ) {
    return  operantL1 / operantR2 ;
  }
  else if (operate === '*' ) {
    return  operantL1 * operantR2 ;
  }  
}

setOperate();
setNnumber1();
setNnumber2();

const resultat  = resultatOperation (Number(number1) ,Number(number2), operate)

alert(resultat);
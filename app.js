const calc = function () {
  let number1;
  let number2;
  let operate;

  const setOperate = function () {
    return prompt('Введите операцию (+, -, /, *.)');
  }

  const setNum = function () {
    return prompt('Введите число');
  }

  const resultatOperation = function (operantL1, operantR2, operate) {
    console.log(operantL1, operantR2)
    let result;

    if (operate === '+') {
      result = operantL1 + operantR2 ;
    }
    else if (operate === '-') {
      result = operantL1 - operantR2 ;
    }
    else if (operate === '/') {
      result = operantL1 / operantR2 ;
    }
    else if (operate === '*') {
      result = operantL1 * operantR2 ;
    }  
    
    return result;
  }

  operate = setOperate();
  number1 = setNum();
  number2 = setNum();

  const resultat  = resultatOperation (Number(number1) ,Number(number2), operate);
  console.log(operate, number1, number2);
  alert(resultat);
}

calc ();

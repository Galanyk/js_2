function calc() {

  let number1;
  let number2;
  let operate;

  const setOperate = function () {
    const operation = prompt('Enter operation (+, -, /, *.)');
    console.log(operation);
    if(operation === '+' || operation === '-' ||
       operation === '/' || operation === '*')
       {
          return operation;
       }
    alert('Wrong operation');
  }

  const setNum = function () {
    const result = prompt('Enter number');
    console.log(result);

    if(isNaN(result))
    {
      alert('Wrong value');
    }

    if(result === null) {
      return 0;
    }
    return result;
  }

  const resultatOperation = function (operantL1, operantR2, operate) {
    let result;

    if (operate === '+') {
      result = operantL1 + operantR2;
    }
    else if (operate === '-') {
      result = operantL1 - operantR2;
    }
    else if (operate === '/') {
      if(operantR2 === 0)
      {
        alert('Wrong operation');
        return;
      }
      result = operantL1 / operantR2;
    }
    else if (operate === '*') {
      result = operantL1 * operantR2;
    }

    return result;
  }

  operate = setOperate();
  number1 = setNum();
  number2 = setNum();

  const resultat = resultatOperation(Number(number1), Number(number2), operate);
  console.log(resultat);

  alert(resultat);
}

calc();

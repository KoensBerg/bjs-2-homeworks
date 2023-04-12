function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sum = (arr).reduce((a, b) => a + b);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return (arr).reduce((a, b) => a + b);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  max = Math.max(...arr);
  min = Math.min(...arr);
  
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;  // чётные
  let sumOddElement = 0;   // нечётные

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;  // чётные
  let count = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      count ++;
    }
  }

  return +(sumEvenElement / count).toFixed(2);
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }
  
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; ++i) {
    let workerResult = func(...arrOfArr[i]);
    
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
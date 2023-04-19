function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length &&
    arr1.every((item, idx) => item === arr2[idx]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0;
  }
  
  let result = users.filter((item) => item.gender === gender).map((item, idx, arr) => item.age).reduce((acc, item, idx, arr) => {
    acc += item;
    
    if (idx === arr.length - 1) {
      return acc / arr.length;
    } else {
      return acc;
    }
  }, 0);
  
  return result;
}
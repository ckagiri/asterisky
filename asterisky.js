const asterisky = value => {
  const valueAsString = makeValueString(value);
  return insertAsterisk(valueAsString);
}

// return string representation of value passed
const makeValueString = value => {
  // coerce type
  let str = value + '';

  // split by comma then join for arrays ie "1,2,3".splite(",") = ["1", "2", "3"]
  // for non array create one element array ie "123".split(",") = ["123"]
  let strArr = str.split(",");

  // ["1", "2", "3"].join('') = '123'
  // ["123"].join('') = '123'
  return strArr.join('');
}

// insert asterisk between two even numbers in a string
const insertAsterisk = str => {
  const strArr = str.split('');
  const newStrArr = [strArr[0]];

  for (let i = 1; i < strArr.length; i++) {
    // radix not required but considered best practice in some circles
    const current = parseInt(str[i], 10);
    const previous = parseInt(str[i - 1], 10);

    if (previous % 2 === 0 && current % 2 === 0) {
      newStrArr.push('*');
      newStrArr.push(current)
    } else {
      newStrArr.push(current);
    }
  }

  return newStrArr.join('');
}

module.exports = asterisky;

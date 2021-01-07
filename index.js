function sumItems(array) {
  if (!Array.isArray(array)) return array;
  else {
    let res = 0;
    for (let elem of array) {
      res += sumItems(elem);
    }
    return res;
  }
}

module.exports = sumItems;
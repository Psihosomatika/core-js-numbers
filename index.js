function toNumber(value, def) {
  const a = +value;
  console.log(value);
  console.log(typeof a);
  let res;
  if (typeof a === 'number' && !Number.isNaN(a)) {
    res = value;
  } else {
    res = def;
  }
  console.log(res);
  return res;
}
toNumber('1', 0);
// toNumber(null, 0);
// toNumber('test', 0);
// toNumber(new Number(42), 0);

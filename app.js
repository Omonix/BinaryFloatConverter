const myFloat = "-21.25";
const entire = Math.abs(parseFloat(myFloat))
  .toString()
  .slice(0, myFloat.indexOf("."));
const lb_findBool = (num) => {
  if (num < 0) {
    return "1";
  } else {
    return "0";
  }
};
const lb_findExponent = () => {
  let conserv = 0;
  for (let z = 0; z < entire; z++) {
    if (conserv < parseInt(entire)) {
      conserv = 2 ** z;
    } else {
      conserv = z - 2;
      break;
    }
  }
  return conserv;
};
const lb_findExpoValue = (expo) => {
  const expoEncoded = expo + 127;
  return expoEncoded.toString(2);
};
const lb_findBiExpo = (num) => {
  return parseInt(num).toString(2);
};
const lb_binaryConvert = (entired, floated) => {
  let decimal = entired.slice(1, entired.length) + floated;
  let ref = decimal.length;
  for (let x = 0; x < 23 - ref; x++) {
    decimal += "0";
  }
  return decimal;
};
const lb_findMantissa = (num) => {
  let n = parseFloat(num.slice(num.indexOf("."), num.length));
  let bin = "";
  while (n !== parseInt(n)) {
    n *= 2;
    bin += n.toString().slice(0, n.toString().indexOf("."));
    n = n.toString().slice(n.toString().indexOf("."), n.toString(10).length);
    n = parseFloat(n);
  }
  return (bin += "1");
};
const lb_binarys = () => {
  console.log(lb_findBool(myFloat));
  console.log(lb_findExpoValue(lb_findExponent()));
  console.log(
    lb_binaryConvert(lb_findBiExpo(entire), lb_findMantissa(myFloat))
  );
};

lb_binarys();

function floatToIEEE754(floatNum) {
  let sign = floatNum < 0 ? 1 : 0;
  floatNum = Math.abs(floatNum);
  let intPart = Math.floor(floatNum);
  let fracPart = floatNum - intPart;
  let intPartBinary = intPart.toString(2);
  let fracPartBinary = "";
  while (fracPart > 0 && fracPartBinary.length < 23) {
    fracPart *= 2;
    if (fracPart >= 1) {
      fracPartBinary += "1";
      fracPart -= 1;
    } else {
      fracPartBinary += "0";
    }
  }
  let binary = intPartBinary + "." + fracPartBinary;
  let exponent = 0;
  if (intPartBinary.length > 0) {
    exponent = intPartBinary.length - 1;
    binary = intPartBinary[0] + "." + intPartBinary.slice(1) + fracPartBinary;
  } else {
    exponent = -fracPartBinary.indexOf("1") - 1;
    binary = "1." + fracPartBinary.slice(fracPartBinary.indexOf("1") + 1);
  }
  let biasedExponent = exponent + 127;
  let exponentBits = biasedExponent.toString(2).padStart(8, "0");
  let mantissa = binary.split(".")[1].slice(0, 23).padEnd(23, "0");
  let ieee754Binary = sign.toString() + exponentBits + mantissa;
  return {
    binary: ieee754Binary,
    hex: parseInt(ieee754Binary, 2).toString(16).padStart(8, "0"),
  };
}
let result = floatToIEEE754(-10.625);
console.log("Représentation binaire IEEE 754:", result.binary);
console.log("Représentation hexadécimale IEEE 754:", result.hex);

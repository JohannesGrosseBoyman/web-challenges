let data = function square(number) {
  number * number;
};

switch (typeof data) {
  case "string":
    console.log("string!");
    break;
  case "number":
    isNaN(data) ? console.log("not a number!") : console.log("number!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "undefined":
    console.log("undefined!");
    break;
  case "NaN":
    console.log("not a number!");
    break;
  case "function":
    console.log("function!");
    break;

  case "object":
    if (Array.isArray(data)) {
      console.log("array!");
    } else if (data === null) {
      console.log("null!");
    } else {
      console.log("object!");
    }
    break;
  default:
    console.log("I have no idea!");
}

function processInput(number, text) {
  const doubled = number * 5;
  return `${doubled}${text}`;
}

function processInput2(number, text) {
  const doubled = number * 2;
  return `${doubled}${text}`;
}

function processInput3(number, text) {
  const doubled = number * 3;
  return `${doubled}${text}`;
}


export {processInput as default, processInput2, processInput3};
function formatValue(value: string | number | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
}

// ? Not finished as the requirement
// TODO I have to add guard for each type of Array
// TODO I have to finish as the requirement
function getLength(value: string | any[]) {
  return value.length;
}

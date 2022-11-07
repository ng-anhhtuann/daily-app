const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const today = new Date();
const monthText = monthNames[today.getMonth()];
const monthNum = today.getMonth();
const year = today.getFullYear();
console.log(year);
console.log(monthText);
console.log(monthNum);

export {year, monthText, monthNum, monthNames};

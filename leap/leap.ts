function isLeapYear(year: number): boolean {
  return checkYear(year);
}

function checkYear(year: number): boolean {
  if (year/400 == Math.floor(year/400))
    return true;
  else if (year/100 == Math.floor(year/100))
    return false;
  else if (year/4 == Math.floor(year/4))
    return true;
  else
    return false;
}

export default isLeapYear

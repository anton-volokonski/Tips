
function century(year) {
  
    const closeToCentury = parseInt(year / 100)
    const checkFirstYear = year % 100

    if (year <= 100) {
        return 1;
    } else if (checkFirstYear === 0) {
        return closeToCentury
    } else {
        return closeToCentury + 1
    }
  }


console.log(century(2001))
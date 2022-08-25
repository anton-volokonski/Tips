
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

function numberToString(num) {
    return num.toString()
}

const stringToNumber = function(str){
    return Number(str)
}

function toBinary(n){
    return (n).toString(2);
}



function evenOrOdd(number, callBack) {
    callBack()
    if (Number.isInteger(number / 2)) {
        return console.log("Even")
    } else {
        return "Odd"
    }
}

function callbackFunction() {
    console.log('it\'s callback bitch')
}

const forPrint = evenOrOdd(-8, function(){
    console.log('nuo mas function')
})

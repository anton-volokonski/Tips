
// codewars:

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

function evenOrOdd(number) {
    if (Number.isInteger(number / 2)) {
        return console.log("Even")
    } else {
        return "Odd"
    }
}

// func exec:

(function () {
    console.log( "Now" )
})();

// callback func:

const logger = function(data) {
    console.log(data, new Date())
}

const sum = function (a, b, callback) {
    callback({a, b})
    const result = a + b
    callback(result)
    return result
}

sum(1, 2, logger)

// callback func2:

const callPolice = (input) => {
    console.log('Call 911:', input)
}

const alarm = (thiefs, callback) => {
    if (!thiefs) {
        return;
    }

    callback(thiefs)
}

alarm(3, callPolice)

// arrow func:

const arrowFunc = (someData, logger) => logger(someData)

arrowFunc('Nike', logger)

// arguments:

function aLotOfParametres(a, b, c, d, e) {
    console.log(arguments)
}

aLotOfParametres(1,2,3,4,5)

// constructors:

const Student = function(name, age) {
    this.name = name
    this.age = age
    // console.log(this)
    this.getData = () => console.log(this.name, this.age)
}

const studentPeter = new Student('Peter', 22)
const studentBob = new Student('Bob', 62)

studentPeter.getData()
studentBob.getData()

//
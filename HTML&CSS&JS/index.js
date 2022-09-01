const buttons = document.querySelectorAll('.proceed-button')
const span = document.getElementById('counter')

//console.log(button)

const Counter = function(){
    this.count = 0
    this.increase = function(){
        this.count++
    }
}

const counter = new Counter()
//span.innerHTML = counter.count

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        console.log(event)
        counter.increase()
        console.log(counter.count)
        span.innerHTML = counter.count
    })
}


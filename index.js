let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

console.log(countEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    let entriesString = count + ", "
    saveEl.innerText += " " + entriesString

    count -= count 
    document.getElementById("count-el").innerText = count
}
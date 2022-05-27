let firstInput = document.getElementById("first-input")
let secondInput = document.getElementById("second-input")
let thirdInput = document.getElementById("third-input")
let fourthInput = document.getElementById("fourth-input")

let characters = []

for (let i = 33; i < 127; i++) {
    characters.push(String.fromCharCode(i))
}

function renderPassword() {
    firstInput.value = generatePassword()
    secondInput.value = generatePassword()
    thirdInput.value = generatePassword()
    fourthInput.value = generatePassword()      
}

function generatePassword() {
    let passwordLength = document.getElementById("length-input").value
    let passwordSTR = ""
    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * characters.length)
        passwordSTR += characters[index]
    }
    return passwordSTR
}

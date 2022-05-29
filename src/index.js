const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const { nonConstructibleChange } = require("./1-nonConstructibleChange")
const { sortedSquaredArray } = require("./2-sortedSquaredArray")

const options = [nonConstructibleChange, sortedSquaredArray]

readline.question('Choose function to test: \n 0. Non-Constructible Change \n 1. Sorted Squared Array\n', option => {
    if (option == 0 || option == 1) {
        selectedOption = options[option]
        readline.question('Input data (separated by empty space): ', array => {
            console.log(selectedOption(array.split(' ').map(el => Number(el))))
            readline.close()
        })
    } else {
        console.log('Invalid option!')
        readline.close()
    }
})


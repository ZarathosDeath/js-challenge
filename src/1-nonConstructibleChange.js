const { sortInAscOrder } = require('./utils') 

exports.nonConstructibleChange = (coins) => {
    let smallestSum = 1
    let sortedArray = sortInAscOrder(coins)

    for (let coin of sortedArray) {
        if (coin > smallestSum) {
            return smallestSum
        } else {
            smallestSum = smallestSum + coin
        }
    }
    return smallestSum
}



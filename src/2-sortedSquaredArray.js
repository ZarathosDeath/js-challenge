const { sortInAscOrder } = require('./utils') 

exports.sortedSquaredArray = (arr) => {
    const squaredArray = arr.map(integer => Math.pow(integer, 2))
    return sortInAscOrder(squaredArray)
}

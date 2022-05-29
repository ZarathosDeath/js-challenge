exports.sortInAscOrder = (list = []) => {
    return list.sort(compareAsc)
}

function compareAsc (a, b) {
    return a - b
}

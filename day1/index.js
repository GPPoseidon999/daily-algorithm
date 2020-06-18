const demo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// 方法一
function Find(target, array) {
    let i = array.length - 1
    let j = 0
    return compare(target, array, i, j)
}

function compare(target, array, i, j) {
    if (array[i] === undefined || array[i][j] === undefined) {
        return false
    }
    const temp = array[i][j]
    if (target === temp) {
        return true
    } else if (target > temp) {
        return compare(target, array, i, j + 1)
    } else if (target < temp) {
        return compare(target, array, i - 1, j)
    }
}

console.log(Find(8, demo))

// 方法二  二分查找

function binarySearch(){

}


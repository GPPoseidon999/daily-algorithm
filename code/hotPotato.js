const Queue = require('./queue')

function hotPotato(elementsList, num) {
    const queue = new Queue()
    const elimitatedList = []
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            // 模拟传递
            queue.enqueue(queue.dequeue())
        }
        // 淘汰
        elimitatedList.push(queue.dequeue())
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue(),
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
console.log(result)
result.eliminated.forEach((name) => {
    console.log(`${name}在击鼓传花游戏中被淘汰`)
})
console.log(`胜利者: ${result.winner}`)

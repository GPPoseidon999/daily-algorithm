const { defaultEquals } = require('./utils')
const Node = require('./models/linked-list-models')
module.exports = class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
}

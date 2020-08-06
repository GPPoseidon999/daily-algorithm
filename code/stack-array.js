class Stack {
    constructor() {
        this.items = []
    }
    // 添加元素
    push(element) {
        this.items.push(element)
    }
    // 移除元素
    pop() {
        return this.items.pop()
    }
    // 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    // 检查栈是否为空
    isEmpty(){
        return this.items.length === 0
    }
    // 返回栈的长度
    size(){
        return this.items.length
    }
    // 清空栈
    clear(){
        this.items = []
    }
}

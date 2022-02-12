class Stack {
    constructor () {
        this.top = -1;
        this.items = {}
    }
    get peek() {
        return this.items[this.top]
    }
    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }
    pop() {
        delete this.items[this.top]
        this.top -= 1;
    }
}


describe('Stack Testing', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    test('Is created empty', () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    });

    test('Can push to the top', () => {
        stack.push('item');
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe('item')
    });

    test('Can pop off', () => {
        stack.push('item');
        stack.push('item2');
        stack.push('item3');
        stack.pop();
        expect(stack.top).toBe(1)
        expect(stack.peek).toBe('item2')
    });
    
})
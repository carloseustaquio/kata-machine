interface Node<T> {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>

        node.prev = this.head;
        this.head = node;
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        const node = this.head;
        this.head = this.head.prev;

        this.length--;
        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
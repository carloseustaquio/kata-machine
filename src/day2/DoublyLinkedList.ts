class Node<T> {
    constructor(
        public value: T,
        public next?: Node<T>,
        public prev?: Node<T>,
    ) {}
}

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: Node<T>

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const node = new Node(item);
        node.next = this.head;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        let curr = this.head;

        if (idx === 0 || !curr) {
            return this.prepend(item);
        }

        for (let i = 0; i < idx - 1; i++) {
            if (!curr) throw Error('trying to insert at a invalid position');
            curr = curr.next;
        }

        const node = new Node(item);
        node.next = curr?.next;
        node.prev = curr;

        if (curr) {
            curr.next = node;
        }

        if (curr?.next) {
            curr.next.prev = node;
        }

        this.length++;
    }
    append(item: T): void {
        let curr = this.head;

        if (!curr) {
            return this.prepend(item);
        }

        while(curr?.next) {
            curr = curr.next;
        }

        const node = new Node(item);
        node.prev = curr;
        curr.next = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        let curr = this.head;

        while (curr?.value !== item && curr !== undefined) {
            curr = curr?.next;
        }

        if (!curr) return undefined;

        if (curr.prev) {
            curr.prev.next = curr.next;
        } else {
            // means this is the first index
            this.head = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        curr.prev = undefined;
        curr.next = undefined;

        this.length--;
        return curr.value;
    }
    get(idx: number): T | undefined {
        let curr = this.head;

        for (let i = 0; i < idx; i++) {
            if (!curr?.next) return undefined;
            curr = curr.next;
        }

        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;

        if (!curr) return undefined;

        if (idx === 0) {
            this.head = curr.next;

            if (this.head) {
                this.head.prev = undefined;
            }

            curr.next = undefined;
            curr.prev = undefined;

            this.length--;
            return curr.value;
        }

        for (let i = 0; i < idx - 1; i++) {
            if (!curr?.next) return undefined;
            curr = curr.next;
        }

        const node = curr.next;

        curr.next = curr.next?.next
        if (curr.next) {
            curr.next.prev = curr;
        }

        if (node) {
            node.next = undefined;
            node.prev = undefined;
        }

        this.length--;

        return node?.value;
    }
}
class Node<T> {
    constructor(
        public value: T,
        public next?: Node<T>,
    ) {}
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    
    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        this.head = new Node(item, this.head)
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        let curr = this.head;
        const node = new Node(item);

        if (!curr) throw Error('trying to insert at an invalid position');

        if (idx === 0) {
            return this.prepend(item);
        }

        for (let i = 0; i < idx - 1; i++) {
            if (!curr?.next) throw Error('trying to insert at an invalid position');

            curr = curr.next; 
        }

        node.next = curr.next;
        curr.next = node;
        this.length++;
    }
    append(item: T): void {
        let curr = this.head;
        const node = new Node(item);

        if (!curr) {
            this.head = node;
            this.length++;
            return;
        }

        while (curr?.next) {
            curr = curr?.next;
        }

        curr.next = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        let curr = this.head;

        if (!curr) return undefined;

        if (curr.value === item) {
            this.head = curr.next;
            curr.next = undefined;
            this.length--;
            return curr.value;
        }

        while (curr.next) {
            const next = curr.next;
            if (next.value === item) {
                curr.next = curr.next.next
                next.next = undefined;
                this.length--;
                return next.value;
            }
            curr = curr?.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        let curr = this.head;

        if (!curr) return undefined;

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
            curr.next = undefined;
            this.length--;
            return curr.value;
        }

        for (let i = 0; i < idx - 1; i++) {
            if (!curr?.next) return undefined;
            curr = curr?.next;
        }

        const next = curr.next;
        curr.next = next?.next;
        this.length--;
        return next?.value;
    }
}
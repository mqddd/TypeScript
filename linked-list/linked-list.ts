class LinkedList<T>{
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;
    constructor(){
        this.tail = null;
        this.head = null;
        this.size = 0;
    }

    public push(num: T): void{
        let node = new Node<T>(num);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;   
        }
        this.size++;
    }

    public pop(): T | string{
        if (this.tail !== null) {
            const data: T = this.tail.data;
            this.tail = this.tail.prev;
            this.size--;
            if (this.size === 0) {
                this.tail = null;
                this.head = null;
            }
            return data;
        } else {
            return "LinkedList is empty!";
        }
    }

    public unshift(num: T): void{
        let node = new Node<T>(num);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    public shift(): T | string{
        if (this.head !== null) {
            const data: T = this.head.data;
            this.head = this.head.next;
            this.size--;
            if(this.size === 0) {
                this.head = null;
                this.tail = null;
            }
            return data; 
        } else {
            return "LinkedList is empty!";
        }
    }

    public delete(num: T): void{
        const pos : number = this.findPos(num);
        if (pos !== -1){
            let current: Node<T> | null = this.head;
            let previous: Node<T> | null = this.head;
            if (pos === 0 && this.size === 1) {
                this.head = null;
                this.tail = null;
            } else if(pos > 0 && pos === this.size - 1) {
                if (this.tail !== null) {
                    this.tail = this.tail.prev;    
                }
            } else {
                let i: number = 0;
                do {
                    i++;
                    if (current !== null) {
                        previous = current;
                        current = current.next;    
                    }
                } while (i < pos);
                if (current !== null) {
                    if (previous !== null) {
                        previous.next = current.next;   
                    }    
                }
            }
            this.size--;
        }
    }

    private findPos(num: T): number{
        if (this.head != null) {
            let pos: number = 0;
            let current: Node<T> = this.head;
            if (current.data === num) {
                return 0;
            }
            while(current.next != null){
                if (current.data === num) {
                    return pos;
                }
                current = current.next;
                pos++;
            }
            return -1;    
        } else {
            return -1;
        }
    }
  
    public count(): number{
        return this.size;
    }
}

class Node<T> {
    public data: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export default LinkedList;
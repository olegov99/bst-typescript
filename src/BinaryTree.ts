export namespace BinarySearchTree {
    
    class Node<T> {
        private _key: T;
        private _leftChild: Node<T>;
        private _rightChild: Node<T>;
    
        constructor(key: T) {
            this._key = key;
        }
        get key(): T {
            return this._key;
        }
        get leftChild(): Node<T> {
            return this._leftChild;
        }
        get rightChild(): Node<T> {
            return this._rightChild;
        }
        set key(key: T) {
            this._key = key;
        }
        set leftChild(child: Node<T>) {
            this._leftChild = child;
        }
        set rightChild(child: Node<T>) {
            this._rightChild = child;
        }
    }

    class Queue<T> {
        private _store: T[] = [];

        public push(value: T) {
            this._store.push(value);
        }

        public pop(): T | undefined {
            return this._store.shift();
        }

        public isEmpty(): boolean {
            return this._store.length === 0 ? true : false;
        }
    }
    
    export class BinaryTree<H> {
        private _root: Node<H>;
    
        public addNode(key: H): void {
            this._root = this.addNodeByRecursion(this._root, key);
        }
    
        public removeNode(key: H): void {
            this._root = this.removeNodeByRecursion(this._root, key);
        }
    
        public findNode(key: H): Node<H> {
            return this.findNodeByRecursion(this._root, key);
        }

        public traverseLevelOrder(): void {
            if (this._root == null) {
                return;
            }
            let nodes: Queue<Node<H>> = new Queue<Node<H>>();
            nodes.push(this._root);
            while (!nodes.isEmpty()) {
                let currentNode: Node<H> = nodes.pop();
                if (currentNode.leftChild != null) {
                    nodes.push(currentNode.leftChild);
                }
                if (currentNode.rightChild != null) {
                    nodes.push(currentNode.rightChild);
                }
            }
        }
    
        private addNodeByRecursion(currentNode: Node<H>, key: H): Node<H> {
            if (currentNode == null) {
                return new Node<H>(key);
            }
            if (key < currentNode.key) {
                currentNode.leftChild = this.addNodeByRecursion(currentNode.leftChild, key);
            } else if (key > currentNode.key) {
                currentNode.rightChild = this.addNodeByRecursion(currentNode.rightChild, key);
            }
            return currentNode;       
        }
    
        private removeNodeByRecursion(currentNode: Node<H>, key: H): Node<H> {
            if (currentNode == null) {
                return null;
            }
            if (key === currentNode.key) {
                if (currentNode.leftChild == null && currentNode.rightChild == null) {
                    return null;
                } else if (currentNode.leftChild != null && currentNode.rightChild == null) {
                    return currentNode.leftChild;
                } else if (currentNode.leftChild == null && currentNode.rightChild != null) {
                    return currentNode.rightChild;
                } else {
                    let smallestKey: H = this.findSmallestKey(currentNode.rightChild);
                    currentNode.key = smallestKey;
                    currentNode.rightChild = this.removeNodeByRecursion(currentNode.rightChild, smallestKey);
                    return currentNode;
                }
            } else if (key < currentNode.key) {
                currentNode.leftChild = this.removeNodeByRecursion(currentNode.leftChild, key);
            } else if (key > currentNode.key) {
                currentNode.rightChild = this.removeNodeByRecursion(currentNode.rightChild, key);
            }
            return currentNode;
        }
    
        private findSmallestKey(currentNode: Node<H>): H {
            return currentNode.leftChild == null ? currentNode.key : this.findSmallestKey(currentNode.leftChild);
        }
    
        private findNodeByRecursion(currentNode: Node<H>, key: H): Node<H> {
            if (currentNode == null) {
                return null;
            }
            if (key === currentNode.key) {
                return currentNode;
            } else if (key < currentNode.key) {
                return this.findNodeByRecursion(currentNode.leftChild, key);
            } else if (key > currentNode.key) {
                return this.findNodeByRecursion(currentNode.rightChild, key);
            }
        }
    }
}

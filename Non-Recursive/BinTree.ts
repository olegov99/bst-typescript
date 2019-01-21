export { };

class  Node <T> {
    private _key: number;
    private _data: T;
    private _leftChild: Node <T>;
    private _rightChild: Node <T>;
    constructor(key: number, data: T) {
        this._key = key;
        this._data = data;
    }
    get key(): number {
        return this._key;
    }
    get data(): T {
        return this._data;
    }
    get leftChild(): Node <T> {
        return this._leftChild;
    }
    get rightChild(): Node <T> {
        return this._rightChild;
    }
    set leftChild(child: Node <T>) {
        this._leftChild = child;
    }
    set rightChild(child: Node <T>) {
        this._rightChild = child;
    }
}

class BinaryTree <H> {
    private _root: Node<H>;

    get root(): Node<H> {
        return this._root;
    }

    /*
    public addNode(key: number, data: H): void {
        let newNode: Node<H> = new Node<H> (key, data);
        if (this._root == null) {
            this._root = newNode;
        } else {
            let focusNode: Node<H> = this._root;
            let parent: Node<H>;
            while (true) {
                parent = focusNode;
                if (key < focusNode.key) {
                    focusNode = focusNode.leftChild;
                    if (focusNode == null) {
                        parent.leftChild = newNode;
                        return;
                    }
                } else {
                    focusNode = focusNode.rightChild;
                    if (focusNode == null) {
                        parent.rightChild = newNode;
                        return;
                    }
                }
            }
        }
    }
    */

    public removeNode(key: number): void {
        let focusNode: Node<H> = this._root;
        let parent: Node<H> = this._root;
        let isLeftChild: boolean = true;
        while (focusNode.key !== key) {
            parent = focusNode;
            if (key < focusNode.key) {
                isLeftChild = true;
                focusNode = focusNode.leftChild;
            } else {
                isLeftChild = false;
                focusNode = focusNode.rightChild;   
            }
            if (focusNode == null) {
                return;
            }
        }
        if (focusNode.leftChild == null && focusNode.rightChild == null) {
            if (focusNode === this._root) {
                this._root = null;
            } else if (isLeftChild) {
                parent.leftChild = null;
            } else {
                parent.rightChild = null;
            }
        } else if (focusNode.rightChild == null) {
            if (focusNode === this._root) {
                this._root = focusNode.leftChild;
            } else if (isLeftChild) {
                parent.leftChild = focusNode.leftChild;
            } else {
                parent.rightChild = focusNode.leftChild;
            }
        } else if (focusNode.leftChild == null) {
            if (focusNode === this._root) {
                this._root = focusNode.rightChild;
            } else if (isLeftChild) {
                parent.leftChild = focusNode.rightChild;
            } else {
                parent.rightChild = focusNode.rightChild;
            }
        } else {
            let replacement: Node <H> = this.getReplacementNode(focusNode);
            if (focusNode === this._root) {
                this._root = replacement;
            } else if (isLeftChild) {
                parent.leftChild = replacement;
            } else {
                parent.rightChild = replacement;
            }
            replacement.leftChild = focusNode.leftChild;
        }
    }

    private getReplacementNode(replacedNode: Node<H>): Node<H> {
        let replacementParent: Node<H> = replacedNode;
        let replacement: Node<H> = replacedNode;
        let focusNode: Node<H> = replacedNode.rightChild;
        while (focusNode != null) {
            replacementParent = replacement;
            replacement = focusNode;
            focusNode = focusNode.leftChild;
        }
        if (replacement !== replacedNode.rightChild) {
            replacementParent.leftChild = replacement.rightChild;
            replacement.rightChild = replacedNode.rightChild;
        }
        return replacement;
    }
}

let tree = new BinaryTree<string>();
console.log(tree.root == null);

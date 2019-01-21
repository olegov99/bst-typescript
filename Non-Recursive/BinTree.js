"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(key, data) {
        this._key = key;
        this._data = data;
    }
    Object.defineProperty(Node.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "leftChild", {
        get: function () {
            return this._leftChild;
        },
        set: function (child) {
            this._leftChild = child;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "rightChild", {
        get: function () {
            return this._rightChild;
        },
        set: function (child) {
            this._rightChild = child;
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    Object.defineProperty(BinaryTree.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
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
    BinaryTree.prototype.removeNode = function (key) {
        var focusNode = this._root;
        var parent = this._root;
        var isLeftChild = true;
        while (focusNode.key !== key) {
            parent = focusNode;
            if (key < focusNode.key) {
                isLeftChild = true;
                focusNode = focusNode.leftChild;
            }
            else {
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
            }
            else if (isLeftChild) {
                parent.leftChild = null;
            }
            else {
                parent.rightChild = null;
            }
        }
        else if (focusNode.rightChild == null) {
            if (focusNode === this._root) {
                this._root = focusNode.leftChild;
            }
            else if (isLeftChild) {
                parent.leftChild = focusNode.leftChild;
            }
            else {
                parent.rightChild = focusNode.leftChild;
            }
        }
        else if (focusNode.leftChild == null) {
            if (focusNode === this._root) {
                this._root = focusNode.rightChild;
            }
            else if (isLeftChild) {
                parent.leftChild = focusNode.rightChild;
            }
            else {
                parent.rightChild = focusNode.rightChild;
            }
        }
        else {
            var replacement = this.getReplacementNode(focusNode);
            if (focusNode === this._root) {
                this._root = replacement;
            }
            else if (isLeftChild) {
                parent.leftChild = replacement;
            }
            else {
                parent.rightChild = replacement;
            }
            replacement.leftChild = focusNode.leftChild;
        }
    };
    BinaryTree.prototype.getReplacementNode = function (replacedNode) {
        var replacementParent = replacedNode;
        var replacement = replacedNode;
        var focusNode = replacedNode.rightChild;
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
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
console.log(tree.root == null);

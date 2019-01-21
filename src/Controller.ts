import $ from "jquery";
import {BinarySearchTree as BST, BinarySearchTree} from "./BinaryTree";
import {UI_BinarySearchTree as UI} from "./UI-BinaryTree";
import "./styles/styles.less";

class Controller {
    private _binaryTree: BST.BinaryTree<number>;

    public init(): void {
        this.createBinaryTree();
        this.createControlPanel();
        console.log("The binary search tree is ready!");
        console.log(this._binaryTree);
    }

    private createControlPanel(): void {
        let cPanel: UI.ControlPanel = new UI.ControlPanel([
            {
                input: new UI.Input("Input Key", "control-panel__add-node-input"),
                button: new UI.Button("Add node", "control-panel__add-node-button", () => setTimeout(() => {
                    this.addNode(Number($(".control-panel__add-node-input").val()));
                }, 0)),
            },
            {
                input: new UI.Input("Input Key", "control-panel__remove-node-input"),
                button: new UI.Button("Remove node", "control-panel__remove-node-button", () => setTimeout(() => {
                    this.removeNode(Number($(".control-panel__remove-node-input").val()));
                }, 0)),
            },
            {
                input: new UI.Input("Input Key", "control-panel__find-node-input"),
                button: new UI.Button("Find node", "control-panel__find-node-button", () => setTimeout(() => {
                    this.findNode(Number($(".control-panel__find-node-input").val()));
                }, 0)),
            },
        ]);
        $("#app-root").append(cPanel.$html);
    }

    private createBinaryTree(): void {
        this._binaryTree = new BST.BinaryTree<number>();
    }

    private addNode(key: number): void {
        this._binaryTree.addNode(key);
        if (key !== 0) {
            console.log("The node has been successfully added!");
            console.log(this._binaryTree);
        } else {
            console.log("!!! Please, input the value.");
        }
        $(".control-panel__add-node-input").val("");
    }

    private removeNode(key: number): void {
        this._binaryTree.removeNode(key);
        if (key !== 0) {
            console.log("The node has been successfully removed!");
            console.log(this._binaryTree);
        } else {
            console.log("!!! Please, input the value.");
        }
        $(".control-panel__remove-node-input").val("");
    }

    private findNode(key: number): void {
        console.log(this._binaryTree.findNode(key));
        $(".control-panel__find-node-input").val("");
    }
}

$(document).ready(() => {
    let controller = new Controller();
    controller.init();
});

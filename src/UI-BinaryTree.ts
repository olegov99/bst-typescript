import $ from "jquery";

export namespace UI_BinarySearchTree {
    class NodeUI {
        private _nodeKey: any;
        private _$nodeHtml: any;
    
        constructor(nodeyKey: any) {
            this._$nodeHtml = $("<div />", {
                class: "binary-tree__node",
                text: this._nodeKey,
            });
        }
    
        get $html(): any {
            return this._$nodeHtml;
        }
    }
    
    export class Button {
        private _$buttonHtml: any;
        constructor(buttonText: string, buttonClass: string, clickHandler: () => void) {
            this._$buttonHtml = $("<input />", {
                class: buttonClass,
                type: "button",
                value: buttonText,  
            }).on("click", clickHandler);
        }
        get $html(): any {
            return this._$buttonHtml;
        }
    }
    
    export class Input {
        private _$inputHtml: any;
        constructor(placeHolder: string, inputClass: string) {
            this._$inputHtml = $("<input />", {
                class: inputClass,
                placeholder: placeHolder,
                type: "text",
            });
        }
        get $html(): any {
            return this._$inputHtml;
        }
    }
    
    interface IControl {
        input: Input;
        button: Button;
    }
    
    export class ControlPanel {
        private _controls: IControl[];
        private _$controlPanelHtml: any;
        constructor(controls: IControl[]) {
            this._$controlPanelHtml = $("<div />", {
                class: "control-panel",
            });
            this.buildControlPanel(controls);
        }
        private buildControlPanel(controls: IControl[]): void {
            this._controls = controls;
            this.appendControls();
        }
        private appendControls(): void {
            for (let control of this._controls) {
                this._$controlPanelHtml.append(control.input.$html);
                this._$controlPanelHtml.append(control.button.$html);
            }
        }
        get $html(): any {
            return this._$controlPanelHtml;
        }
    }
}

import { FASTElement } from '@microsoft/fast-element';
export declare class PhoneInput extends FASTElement {
    type: string;
    value: string;
    placeholder: string;
    min: string;
    minlength: string;
    max: string;
    maxlength: string;
    readonly: boolean;
    disabled: boolean;
    required: boolean;
    errormsg: string;
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
}
//# sourceMappingURL=PhoneInput.d.ts.map
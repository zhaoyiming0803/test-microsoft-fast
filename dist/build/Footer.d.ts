import { FASTElement } from '@microsoft/fast-element';
export declare class Footer extends FASTElement {
    greeting: string;
    onChangeFooter: Function;
    private root;
    constructor();
    handleClick(value: string): void;
    greetingChanged(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    render(): void;
}
//# sourceMappingURL=Footer.d.ts.map
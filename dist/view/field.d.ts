import { IField } from '../field/index';
declare class FieldView implements IField {
    x: number;
    y: number;
    constructor(x: number, y: number);
    private generateField;
    setValue(this: HTMLElement, currentSymbol: string): void;
    initField(): void;
}
export default FieldView;

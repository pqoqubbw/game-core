declare class FieldView {
    x: number;
    y: number;
    constructor(x: number, y: number);
    private generateField;
    renderField(): void;
}
export default FieldView;

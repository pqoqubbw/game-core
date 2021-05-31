declare class FieldView {
    x: number;
    y: number;
    board: any;
    constructor(x: number, y: number, board?: any);
    private generateField;
    renderField(): void;
    clickFieldEl(action: any): void;
    resetField(): void;
}
export default FieldView;

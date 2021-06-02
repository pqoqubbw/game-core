import Observer from '../utils/Observer';
declare class FieldView {
    private x;
    private y;
    private board;
    playEvent: Observer;
    private resultMessage;
    constructor(x: number, y: number, board?: HTMLElement[][], playEvent?: Observer, resultMessage?: HTMLHeadingElement);
    private generateField;
    updateCell: ({ x, y, sign }: any) => void;
    renderField(idElement: string, classTable: string): void;
    clearField(): void;
    showWin(winner: string): void;
}
export default FieldView;

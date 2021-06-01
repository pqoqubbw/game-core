import Event from '../Event';
declare class FieldView {
    x: number;
    y: number;
    board: HTMLElement[][];
    playEvent: Event;
    message: HTMLHeadingElement;
    constructor(x: number, y: number, board?: HTMLElement[][], playEvent?: Event, message?: HTMLHeadingElement);
    private generateField;
    updateCell: (data: any) => void;
    renderField(idElement: string): void;
    resetField(): void;
    showWin(winner: string): void;
}
export default FieldView;

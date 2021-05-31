import Event from '../Event';
declare class FieldView {
    x: number;
    y: number;
    board: any[][];
    playEvent: Event;
    updateCellEvent: Event;
    constructor(x: number, y: number, board?: any[][], playEvent?: Event, updateCellEvent?: Event);
    private generateField;
    updateCell: (x: number, y: number, sign: string) => void;
    k: any;
    renderField(): void;
    resetField(): void;
}
export default FieldView;

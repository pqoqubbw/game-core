import { IUpdateData } from '../@types/types';
import Event from '../utils/Event';
declare class FieldView {
    private x;
    private y;
    private board;
    private resultMessage;
    on: Event;
    constructor(x: number, y: number, board?: HTMLElement[][], resultMessage?: HTMLHeadingElement, on?: Event);
    private generateField;
    updateCell: ({ x, y, sign }: IUpdateData) => void;
    renderField(idElement: string, classTable: string): void;
    clearField(): void;
    showWin(winner: string): void;
}
export default FieldView;

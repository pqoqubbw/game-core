import { IFieldViewProps } from '../@types/types';
import Event from '../utils/Event';
declare class FieldView implements IFieldViewProps {
    x: number;
    y: number;
    board: HTMLElement[][];
    playEvent: Event;
    resultMessage: HTMLHeadingElement;
    constructor(x: number, y: number, board?: HTMLElement[][], playEvent?: Event, resultMessage?: HTMLHeadingElement);
    private generateField;
    updateCell: (data: any) => void;
    renderField(idElement: string): void;
    clearField(): void;
    showWin(winner: string): void;
}
export default FieldView;

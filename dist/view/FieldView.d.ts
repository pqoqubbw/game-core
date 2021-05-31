import { IFieldViewProps } from '../@types/types';
import Event from '../Event';
declare class FieldView implements IFieldViewProps {
    x: number;
    y: number;
    board: Element[][];
    playEvent: Event;
    updateCellEvent: Event;
    constructor(x: number, y: number, board?: Element[][], playEvent?: Event, updateCellEvent?: Event);
    private generateField;
    updateCell: (x: number, y: number, sign: string) => void;
    renderField(): void;
    resetField(): void;
}
export default FieldView;

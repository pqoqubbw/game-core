import { IFieldViewProps } from '../@types/types';
import Event from '../Event';
declare class FieldView implements IFieldViewProps {
    x: number;
    y: number;
    board: HTMLElement[][];
    playEvent: Event;
    constructor(x: number, y: number, board?: HTMLElement[][], playEvent?: Event);
    private generateField;
    updateCell: (x: number, y: number, sign: string) => void;
    renderField(): void;
    resetField(): void;
}
export default FieldView;

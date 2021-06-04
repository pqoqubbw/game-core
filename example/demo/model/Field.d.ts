import { IFieldProps } from '../@types/types';
declare class Field implements IFieldProps {
    size: {
        x: number;
        y: number;
    };
    board: number[][];
    constructor(size: {
        x: number;
        y: number;
    }, board?: number[][]);
}
export default Field;

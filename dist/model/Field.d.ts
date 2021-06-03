import { IFieldProps } from '../@types/types';
export default class Field implements IFieldProps {
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

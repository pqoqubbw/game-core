import { IFieldProps, TableFilledSymbolType } from '../@types/types';
declare class Field implements IFieldProps {
    size: {
        x: number;
        y: number;
    };
    board: TableFilledSymbolType[][];
    constructor(size: {
        x: number;
        y: number;
    }, board?: TableFilledSymbolType[][]);
}
export default Field;

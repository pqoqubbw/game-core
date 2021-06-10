import { IFieldProps, TableFilledSymbolType } from '../@types/types';

class Field implements IFieldProps {
  constructor(
    public size: {
      x: number;
      y: number;
    },
    public board: TableFilledSymbolType[][] = []
  ) {}
}

export default Field;

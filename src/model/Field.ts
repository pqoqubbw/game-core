import { IFieldProps } from '../@types/types';

class Field implements IFieldProps {
  constructor(
    public size: {
      x: number,
      y: number
    },
    public board: number[][] = [],
  ) { }
}

export default Field;

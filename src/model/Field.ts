import { IFieldProps } from '../@types/types';

export default class Field implements IFieldProps {
  constructor(
    public size: {
      x: number,
      y: number
    },
    public board: number[][] = [],
  ) { }
}

export interface IField {
  size: {
    x: number,
    y: number,
  }
}

export default class Field implements IField {
  constructor(public size: {x: number, y: number}) { }
}

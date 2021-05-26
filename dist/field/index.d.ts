export interface IField {
    x: number;
    y: number;
}
declare class Field implements IField {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export default Field;

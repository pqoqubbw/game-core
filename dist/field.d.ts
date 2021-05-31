export interface IField {
    size: {
        x: number;
        y: number;
    };
}
export default class Field implements IField {
    size: {
        x: number;
        y: number;
    };
    constructor(size: {
        x: number;
        y: number;
    });
}

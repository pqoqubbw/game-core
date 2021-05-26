interface IField {
    x: number;
    y: number;
    playersQuantity: number;
}
declare class Field implements IField {
    x: number;
    y: number;
    playersQuantity: number;
    constructor(x: number, y: number, playersQuantity: number);
    private generateField;
    private createPlayers;
    initField(): void;
}
export default Field;

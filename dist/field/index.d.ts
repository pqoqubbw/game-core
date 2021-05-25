declare class Field {
    x: number;
    y: number;
    playersQuantity: number;
    constructor(x: number, y: number, playersQuantity: number);
    private generateField;
    private createPlayers;
    initField(): void;
}
export default Field;

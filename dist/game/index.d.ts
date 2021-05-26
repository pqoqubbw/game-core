declare abstract class Game {
    abstract isValidate(): boolean;
    abstract checkWin(): boolean;
    abstract switchPlayer(): void;
    abstract handleMove(): void;
    setHandleClick(): void;
    setValue(this: HTMLElement, currentSymbol: string): void;
}
export default Game;

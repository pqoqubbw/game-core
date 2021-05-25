declare abstract class Game {
    abstract handleClick(): void;
    setHandleClick(): void;
    setValue(this: HTMLElement, currentSymbol: string): void;
}
export default Game;

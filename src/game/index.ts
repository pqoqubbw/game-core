abstract class Game {
  abstract isValidate(): boolean;

  abstract checkWin(): boolean;

  abstract switchPlayer(): void;

  abstract handleClick(): void;

  setHandleClick(): void {
    const cells = document.querySelectorAll<HTMLElement>('.cell');

    cells?.forEach((cell) => {
      cell.addEventListener('click', this.handleClick);
    });
  }

  setValue(this: HTMLElement, currentSymbol: string): void {
    if (this.textContent === '') {
      this.textContent = currentSymbol;
    } else {
      alert('Ячейка занята');
    }
  }
}

export default Game;

abstract class Game {
  abstract checkWin(): boolean;

  // eslint-disable-next-line class-methods-use-this
  setMove(): void {
    const tableEl = document.querySelector('.table-bordered') as HTMLElement;
    const cells = tableEl?.querySelectorAll<HTMLElement>('.cell');
    let currentSymbol = 'x';

    function switchPlayer(): string {
      if (currentSymbol === 'x') {
        currentSymbol = 'o';
      } else {
        currentSymbol = 'x';
      }

      return currentSymbol;
      //   return (currentSymbol = currentSymbol === 'x' ? 'o' : 'x');
    }

    function handleClick(this: HTMLElement): void {
      if (this.textContent === 's') {
        this.textContent = currentSymbol;
      }
      switchPlayer();
    }

    cells?.forEach((cell) => {
      cell.addEventListener('click', handleClick);
    });
  }
}

export default Game;

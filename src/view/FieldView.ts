import Event from '../Event';

class FieldView {
  constructor(
    public x: number,
    public y: number,
    public board: any [][] = [],
    public playEvent = new Event(),
    public updateCellEvent = new Event(),
  ) { }

  private generateField(): HTMLTableElement {
    const tableEl = document.createElement('table');
    tableEl.className = 'table-bordered';

    let counter = 0;
    for (let i = 0; i < this.x; i += 1) {
      const row = tableEl.insertRow();
      this.board[i] = [];
      for (let j = 0; j < this.y; j += 1) {
        const cell = row.insertCell();
        this.board[i].push(cell);
        cell.className = 'cell';
        cell.id = `${(counter += 1)}`;
        cell.tabIndex = 1;
        cell.addEventListener('click', () => {
          console.log(`generate${i}${j}`);
          this.playEvent.triggerTwo(i, j);
        });
      }
    }
    return tableEl;
  }

  updateCell = (x: number, y: number, sign: string): void => {
    console.log('updateCell' + 'x' + ' ' + 'y');
    this.board[x][y].innerHTML = sign;
  };k

  renderField(): void {
    const mainElem = document.querySelector('.main');
    const field = this.generateField();
    mainElem?.append(field);
  }

  // clickFieldEl(action): void {
  //   this.board.forEach((el: any): void => el.addEventListener('click', (e) => action(e)));
  // }

  resetField(): void {
    this.board.forEach((el: any): void => {
      const td = el;
      td.textContent = '';
    });
  }
}

export default FieldView;
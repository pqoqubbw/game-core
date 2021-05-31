import { IFieldViewProps } from '../@types/types';

import Event from '../Event';

class FieldView implements IFieldViewProps {
  constructor(
    public x: number,
    public y: number,
    public board = [] as HTMLElement[][],
    public playEvent = new Event(),
  ) { }

  private generateField(): HTMLElement {
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
          this.playEvent.triggerTwo(i, j);
        });
      }
    }
    return tableEl;
  }

  updateCell = (x: number, y: number, sign: string): void => {
    this.board[x][y].innerHTML = sign;
  };

  renderField(): void {
    const mainElem = document.querySelector('.main');
    const field = this.generateField();
    mainElem?.append(field);
  }

  resetField(): void {
    this.board.forEach((el: any) => {
      const td = el;
      td.textContent = '';
    });
  }
}

export default FieldView;

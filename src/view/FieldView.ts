import { IUpdateData } from '../@types/types';

import Observer from '../utils/Observer';

class FieldView {
  constructor(
    private x: number,
    private y: number,
    private board = [] as HTMLElement[][],
    public playEvent = new Observer(),
    private resultMessage = document.createElement('h2'),
  ) { }

  private generateField(): HTMLElement {
    const tableEl = document.createElement('table');
    tableEl.className = 'table-bordered';

    for (let i = 0, counter = 0; i < this.x; i += 1) {
      const row = tableEl.insertRow();
      this.board[i] = [];
      for (let j = 0; j < this.y; j += 1) {
        const cell = row.insertCell();
        this.board[i].push(cell);
        cell.className = 'cell';
        cell.id = `${(counter += 1)}`;
        cell.tabIndex = 1;
        cell.addEventListener('click', () => {
          this.playEvent.trigger({ x: i, y: j });
        });
      }
    }
    return tableEl;
  }

  updateCell = ({ x, y, sign }: IUpdateData): void => {
    this.board[x][y].innerHTML = sign;
  };

  renderField(idElement: string): void {
    const mainElem = document.querySelector(idElement);
    const field = this.generateField();
    mainElem?.append(field);
    mainElem?.append(this.resultMessage);
  }

  clearField(): void {
    this.board.forEach((el) => {
      el.forEach((item) => {
        const currentItem = item;
        currentItem.textContent = '';
      });
    });
  }

  showWin(winner: string): void {
    this.resultMessage.innerHTML = `${winner} win`;
    this.clearField();
  }
}

export default FieldView;

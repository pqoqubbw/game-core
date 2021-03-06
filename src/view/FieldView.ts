import { IUpdateData } from '../@types/types';

import Event from '../utils/Event';

class FieldView {
  constructor(
    private x: number,
    private y: number,
    private board = [] as HTMLElement[][],
    private resultMessage = document.createElement('h2'),
    public event = new Event()
  ) {}

  private generateField(classTable: string): HTMLElement {
    const tableEl = document.createElement('table');
    tableEl.className = classTable;

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
          this.event.trigger('move', { x: i, y: j });
        });
      }
    }
    return tableEl;
  }

  updateCell = ({ x, y, sign }: IUpdateData): void => {
    this.board[x][y].innerHTML = sign;
  };

  renderField(idElement: string, classTable: string): void {
    const mainElem = document.querySelector(idElement);
    const field = this.generateField(classTable);
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
  }
}

export default FieldView;

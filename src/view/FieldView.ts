import { IFieldViewProps } from '../@types/types';

import Event from '../utils/Event';

class FieldView implements IFieldViewProps {
  constructor(
    public x: number,
    public y: number,
    public board = [] as HTMLElement[][],
    public playEvent = new Event(),
    public resultMessage = document.createElement('h2'),
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
          this.playEvent.trigger({ x: i, y: j });
        });
      }
    }
    return tableEl;
  }

  updateCell = (data: any): void => {
    this.board[data.x][data.y].innerHTML = data.sign;
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

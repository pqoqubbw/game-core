import Player from '../player/index';

class Field {
  constructor(
    public x: number,
    public y: number,
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    public playersQuantity: number
  ) {}

  private generateField(): HTMLTableElement {
    const tableEl = document.createElement('table');

    tableEl.className = 'table-bordered';

    for (let i = 0; i < this.x; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < this.y; j += 1) {
        const counter = 0;
        const cell = row.insertCell();
        cell.className = 'cell';
        cell.id = `${counter + 1}`;
        cell.tabIndex = 1;
        // eslint-disable-next-line @typescript-eslint/quotes
        cell.innerHTML = `<div class="visually-hidden">s</div>`;
      }
    }
    return tableEl;
  }

  private createPlayers() {
    const newElement = document.createElement('div');

    for (let i = 0; i < this.playersQuantity; i += 1) {
      const playerWrapper = document.createElement('div');

      playerWrapper.className = 'player';
      playerWrapper.innerHTML = new Player(`Player${i + 1}`).renderPlayer();
      newElement.append(playerWrapper);
    }

    return newElement;
  }

  initField(): void {
    const mainElem = document.querySelector('.main');
    const field = this.generateField();
    const players = this.createPlayers();
    mainElem?.append(field);
    mainElem?.append(players);
  }
}

export default Field;

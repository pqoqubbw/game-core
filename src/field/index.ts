import Player from '../player/index';

class Field {
  constructor(
    public x: number,
    public y: number,
    public playersQuantity: number,
  ) {}

  private generateField(): HTMLTableElement {
    const tableEl = document.createElement('table');
    tableEl.className = 'table-bordered';

    let counter = 0;

    for (let i = 0; i < this.x; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < this.y; j += 1) {
        const cell = row.insertCell();
        cell.className = 'cell';
        cell.id = `${(counter += 1)}`;
        cell.tabIndex = 1;
        cell.innerHTML = '<div class="visually-hidden"></div>';
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

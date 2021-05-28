class FieldView {
  constructor(
    public x: number,
    public y: number,
    public board: any = [],
  ) { }

  private generateField(): HTMLTableElement {
    const tableEl = document.createElement('table');
    tableEl.className = 'table-bordered';

    let counter = 0;

    for (let i = 0; i < this.x; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < this.y; j += 1) {
        const cell = row.insertCell();
        this.board.push(cell);
        cell.className = 'cell';
        cell.id = `${(counter += 1)}`;
        cell.tabIndex = 1;
      }
    }
    return tableEl;
  }

  renderField(): void {
    const mainElem = document.querySelector('.main');
    const field = this.generateField();
    mainElem?.append(field);
  }

  clickFieldEl(action): void {
    this.board.forEach((el: any): void => el.addEventListener('click', (e) => action(e)));
  }

  resetField(): void {
    this.board.forEach((el: any): void => {
      const td = el;
      td.textContent = '';
    });
  }
}

export default FieldView;

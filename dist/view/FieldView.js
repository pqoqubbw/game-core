import Event from '../utils/Event';
class FieldView {
    constructor(x, y, board = [], resultMessage = document.createElement('h2'), event = new Event()) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.resultMessage = resultMessage;
        this.event = event;
        this.updateCell = ({ x, y, sign }) => {
            this.board[x][y].innerHTML = sign;
        };
    }
    generateField(classTable) {
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
    renderField(idElement, classTable) {
        const mainElem = document.querySelector(idElement);
        const field = this.generateField(classTable);
        mainElem?.append(field);
        mainElem?.append(this.resultMessage);
    }
    clearField() {
        this.board.forEach((el) => {
            el.forEach((item) => {
                const currentItem = item;
                currentItem.textContent = '';
            });
        });
    }
    showWin(winner) {
        this.resultMessage.innerHTML = `${winner} win`;
    }
}
export default FieldView;

import Event from '../utils/Event.js';
class FieldView {
    x;
    y;
    board;
    resultMessage;
    on;
    constructor(x, y, board = [], resultMessage = document.createElement('h2'), on = new Event()) {
        this.x = x;
        this.y = y;
        this.board = board;
        this.resultMessage = resultMessage;
        this.on = on;
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
                    this.on.trigger('move', { x: i, y: j });
                });
            }
        }
        return tableEl;
    }
    updateCell = ({ x, y, sign }) => {
        this.board[x][y].innerHTML = sign;
    };
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
        this.clearField();
    }
}
export default FieldView;

import Event from '../utils/Event';
import FieldView from './FieldView';
import PlayerView from './PlayerView';
class HTMLView {
    constructor(game, view = new FieldView(game.field.size.x, game.field.size.y), players = new PlayerView(), event = new Event()) {
        this.game = game;
        this.view = view;
        this.players = players;
        this.event = event;
        this.view.event.subscribe('move', ({ x, y }) => this.game.makeMove({ x, y }));
        this.game.event.subscribe('update', ({ x, y, sign }) => this.view.updateCell({ x, y, sign }));
        this.game.event.subscribe('win', (winner) => this.view.showWin(winner));
        this.game.event.subscribe('draw', (winner) => this.view.showWin(winner));
    }
    render(idElement) {
        this.view.renderField(idElement, 'table-bordered');
        this.players.renderPlayer(this.game.players, '.main');
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = 'start new game';
        buttonElement.onclick = () => {
            this.view.clearField();
            this.game.clearBoard(0);
        };
        document.body.appendChild(buttonElement);
    }
}
export default HTMLView;

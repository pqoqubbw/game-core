import { IPlayer } from '../player/index';

class PlayersView implements IPlayer {
  constructor(public name: string, public scores: number = 0) { }

  renderPlayer(): string {
    return `
                        <h3 class="player-name">${this.name}: <span class='scores'>${this.scores}</span></h3>
                    </div>`;
  }
}

export default PlayersView;

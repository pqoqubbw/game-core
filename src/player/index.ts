interface IPlayer {
  playerName: string;
  scores: number;
  id: string;
}

class Player {
  constructor(public name: string = 'Player') { }

  createPlayer(): IPlayer {
    return {
      playerName: this.name,
      scores: 0,
      id: `${new Date()}`,
    };
  }

  renderPlayer(): string {
    const player = this.createPlayer();
    return `
                    <h3 class="player-name">${player.playerName}: <span class='scores'>${player.scores}</span></h3>
                </div>`;
  }
}

export default Player;

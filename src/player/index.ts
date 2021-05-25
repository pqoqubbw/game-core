interface IPlayer {
  playerName: string;
  scores: number;
  id: string;
}

class Player {
  constructor(
    public name: string = 'Player',
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    public id: string = `${new Date()}`
  ) {}

  createPlayer(): IPlayer {
    return {
      playerName: this.name,
      scores: 0,
      id: this.id,
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

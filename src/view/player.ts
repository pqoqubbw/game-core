class PlayerView {
  constructor(public name: string[]) { }

  renderPlayer(): void {
    const playerBlock = document.querySelector('.main');
    this.name.forEach((itemName: string, index: number): void => playerBlock?.insertAdjacentHTML('beforeend', `<h3 class="player-name">Player ${index + 1}: ${itemName}</h3></div>`));
  }
}

export default PlayerView;

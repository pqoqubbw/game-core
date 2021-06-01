// import { IPlayerViewProps } from '../@types/types';

class PlayerView {
  renderPlayer = (players: any): void => {
    const playerBlock = document.querySelector('.main');
    players.forEach((itemName: string, index: number): void => playerBlock?.insertAdjacentHTML('beforeend', `<h3 class="player-name">Player ${index + 1}: ${itemName}</h3></div>`));
  };
}

export default PlayerView;

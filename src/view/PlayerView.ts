import { IPlayersInfo } from '../@types/types';

class PlayerView {
  renderPlayer = (players: IPlayersInfo[]): void => {
    const playerBlock = document.querySelector('.main');
    players.forEach(
      (itemName: IPlayersInfo, index: number): void => playerBlock?.insertAdjacentHTML('beforeend',
        `<h3 class="player-name">Player ${index + 1}: ${itemName.name}</h3></div>`),
    );
  };
}

export default PlayerView;

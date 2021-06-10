import { IPlayersInfo } from '../@types/types';

class PlayerView {
  renderPlayer = (players: IPlayersInfo[], classSelector: string): void => {
    const playersBlock = document.querySelector(classSelector);
    players?.forEach((itemName: IPlayersInfo, index: number): void =>
      playersBlock?.insertAdjacentHTML(
        'beforeend',
        `<h3 class="player-name">Player ${index + 1}: ${itemName.name}</h3></div>`
      )
    );
  };
}

export default PlayerView;

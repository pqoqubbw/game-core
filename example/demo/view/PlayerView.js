class PlayerView {
    constructor() {
        this.renderPlayer = (players, classSelector) => {
            const playersBlock = document.querySelector(classSelector);
            players?.forEach((itemName, index) => playersBlock?.insertAdjacentHTML('beforeend', `<h3 class="player-name">Player ${index + 1}: ${itemName.name}</h3></div>`));
        };
    }
}
export default PlayerView;

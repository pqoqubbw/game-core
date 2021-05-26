// import Player from '../player/index';

export interface IField {
  x: number,
  y: number,
}

class Field implements IField {
  constructor(
    public x: number,
    public y: number,
  ) { }

  // private createPlayers() {
  //   const newElement = document.createElement('div');

  //   for (let i = 0; i < this.playersQuantity; i += 1) {
  //     const playerWrapper = document.createElement('div');

  //     playerWrapper.className = 'player';
  //     playerWrapper.innerHTML = new Player(`Player${i + 1}`).renderPlayer();
  //     newElement.append(playerWrapper);
  //   }

  //   return newElement;
  // }
}

export default Field;

export interface IPlayer {
  player: {
    value: string,
  },
}

export default class Player implements IPlayer {
  constructor(public player: {
    value: string,
    moves?: number[],
  }) {
    this.player.moves = [];
  }

  // метод для пуша хода

  // setMove(currentPlayer: strung, fieldId: number): void {
  //   currentPlayer.moves.push(fieldId);
  // }
}

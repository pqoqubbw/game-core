export interface IPlayer {
  name: string;
  scores: number;
}

class Player implements IPlayer {
  constructor(public name: string, public scores: number = 0) { }
}

export default Player;

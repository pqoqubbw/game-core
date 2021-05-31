import { IPlayerProps } from '../@types/types';

class Player implements IPlayerProps {
  constructor(public name: string, public sign: string) { }
}

export default Player;

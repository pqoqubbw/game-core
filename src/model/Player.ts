import { IPlayerProps } from '../@types/types';

class Player implements IPlayerProps {
  constructor(public name: string) {}
}

export default Player;

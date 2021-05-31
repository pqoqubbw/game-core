import { IPlayerProps } from '../@types/types';
declare class Player implements IPlayerProps {
    name: string;
    sign: string;
    constructor(name: string, sign: string);
}
export default Player;

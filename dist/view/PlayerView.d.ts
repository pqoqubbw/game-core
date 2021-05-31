import { IPlayerViewProps } from '../@types/types';
declare class PlayerView implements IPlayerViewProps {
    name: string[];
    constructor(name: string[]);
    renderPlayer(): void;
}
export default PlayerView;

import { Player } from '@luchsamapparat/nim';
import * as React from 'react';
import { toFriendlyPlayerName } from '../state/util';

export interface TurnProps {
    player: Player;
    tokensRemoved: number;
}

export const Turn: React.StatelessComponent<TurnProps> = ({ player, tokensRemoved }: TurnProps) => {
    return (
        <p className="turn">{`${toFriendlyPlayerName(player)} removed ${tokensRemoved} ${tokensRemoved > 1 ? 'tokens' : 'token'} from the heap.`}</p>
    );
};

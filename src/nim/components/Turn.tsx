import { Player } from '@luchsamapparat/nim';
import * as React from 'react';

export interface TurnProps {
    player: Player;
    tokensRemoved: number;
}

export const Turn: React.StatelessComponent<TurnProps> = ({ player, tokensRemoved }: TurnProps) => {
    return (
        <p className="turn">{`${player} has removed ${tokensRemoved} tokens from the heap.`}</p>
    );
};

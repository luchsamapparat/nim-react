import { Player as PlayerType } from '@luchsamapparat/nim';
import { isNull } from 'lodash';
import * as React from 'react';

export interface PlayerProps {
    player: PlayerType | null;
}

export const Player: React.StatelessComponent<PlayerProps> = ({ player }: PlayerProps) => {
    if (isNull(player)) {
        return null;
    }

    return (
        <p className="player">{player}</p>
    );
};

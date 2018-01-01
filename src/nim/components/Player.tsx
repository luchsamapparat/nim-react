import { Player as PlayerType } from '@luchsamapparat/nim';
import { isNull } from 'lodash';
import * as React from 'react';
import { toFriendlyPlayerName } from '../state/util';

export interface PlayerProps {
    player: PlayerType | null;
}

export const Player: React.StatelessComponent<PlayerProps> = ({ player }: PlayerProps) => {
    if (isNull(player)) {
        return null;
    }

    return (
        <span className="player">{toFriendlyPlayerName(player)}</span>
    );
};

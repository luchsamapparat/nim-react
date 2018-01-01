import { Player } from '@luchsamapparat/nim';
import * as React from 'react';
import { Choice, Choices } from '../../ui/Choices';
import { toFriendlyPlayerName } from '../state/util';

export interface PlayerSelectionProps {
    defaultPlayer: Player;
    onChange(player: Player): void;
}

export const PlayerSelection: React.StatelessComponent<PlayerSelectionProps> = ({ onChange, defaultPlayer }: PlayerSelectionProps) => {
    const playerChoices: Choice<Player>[] = [Player.Human, Player.Machine]
        .map(player => ({
            label: toFriendlyPlayerName(player),
            value: player,
            isDefault: (player === defaultPlayer)
        }));

    return (
        <Choices name="startingPlayer" choices={playerChoices} onChange={onChange}  />
    );
};

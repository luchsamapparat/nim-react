import { Player } from '@luchsamapparat/nim';
import * as React from 'react';
import { Choice, Choices } from '../../ui/Choices';

export interface PlayerSelectionProps {
    defaultPlayer: Player;
    onChange(player: Player): void;
}

export const PlayerSelection: React.StatelessComponent<PlayerSelectionProps> = ({ onChange, defaultPlayer }: PlayerSelectionProps) => {
    const playerChoices: Choice<Player>[] = [
        { label: 'You', value: Player.Human, isDefault: (Player.Human === defaultPlayer) },
        { label: 'The Computer', value: Player.Machine, isDefault: (Player.Machine === defaultPlayer) }
    ];

    return (
        <Choices name="startingPlayer" choices={playerChoices} onChange={onChange}  />
    );
};

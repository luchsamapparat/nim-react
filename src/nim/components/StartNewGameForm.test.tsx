import { GameConfig, Player } from '@luchsamapparat/nim';
import * as enzyme from 'enzyme';
import * as React from 'react';
import { PlayerSelection, PlayerSelectionProps } from './PlayerSelection';
import { StartNewGameForm } from './StartNewGameForm';

describe('StartNewGameForm', () => {
    const onStartNewGameSpy = jest.fn();
    let startNewGameForm: enzyme.ShallowWrapper;

    beforeEach(() => {
        onStartNewGameSpy.mockClear();
        startNewGameForm = enzyme.shallow(<StartNewGameForm onStartNewGame={onStartNewGameSpy} />);
    });

    test('it renders a player selection with Human set as default player', () => {
        const playerSelection = startNewGameForm.find(PlayerSelection);
        const playerSelectionProps: PlayerSelectionProps = playerSelection.props();

        expect(playerSelection.length).toBe(1);
        expect(playerSelectionProps.defaultPlayer).toBe(Player.Human);
    });

    test('it passes the game config via onStartNewGame when the submit button is clicked', () => {
        const expectedGameConfig: Partial<GameConfig> = { startingPlayer: Player.Machine };

        const playerSelection = startNewGameForm.find(PlayerSelection);
        const playerSelectionProps: PlayerSelectionProps = playerSelection.props();
        playerSelectionProps.onChange(expectedGameConfig.startingPlayer!);

        startNewGameForm.find('button').simulate('click');

        expect(onStartNewGameSpy).toHaveBeenCalledWith(expectedGameConfig);
    });
});

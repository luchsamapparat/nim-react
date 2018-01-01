import { Player } from '@luchsamapparat/nim';
import * as enzyme from 'enzyme';
import { defaultTo } from 'lodash';
import * as React from 'react';
import { Choice, Choices, ChoicesProps } from '../../ui/Choices';
import { PlayerSelection } from './PlayerSelection';

describe('PlayerSelection', () => {
    const defaultPlayer = Player.Machine;
    const onChangeSpy = jest.fn();
    let playerSelection: enzyme.ShallowWrapper;
    let choicesProps: ChoicesProps;

    beforeEach(() => {
        onChangeSpy.mockClear();
        playerSelection = enzyme.shallow(<PlayerSelection defaultPlayer={defaultPlayer} onChange={onChangeSpy} />);
        choicesProps = playerSelection.find(Choices).props();
    });

    test('it renders the starting player options as Choices', () => {
        const choices: Choice<Player>[] = choicesProps.choices;
        const players = choices.map(choice => choice.value);

        expect(players).toContain(Player.Human);
        expect(players).toContain(Player.Machine);
    });

    test('it renders the starting player options as Choices', () => {
        const choices: Choice<Player>[] = choicesProps.choices;
        const defaultValue = choices.find(choice => defaultTo(choice.isDefault, false))!.value;

        expect(defaultValue).toBe(defaultPlayer);
    });

    test('it notifies about a player selection via onChange', () => {
        choicesProps.onChange(Player.Human);

        expect(onChangeSpy).toHaveBeenCalledWith(Player.Human);
    });
});

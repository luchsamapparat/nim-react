import { Player, Turn as TurnType } from '@luchsamapparat/nim';
import * as enzyme from 'enzyme';
import * as React from 'react';
import { Turn, TurnProps } from './Turn';
import { TurnList } from './TurnList';

describe('TurnList', () => {

    test('it renders a list of the given turns', () => {
        const turns: TurnType[] = [
            { player: Player.Human, tokensRemoved: 1 },
            { player: Player.Machine, tokensRemoved: 2 }
        ];

        const turnList: enzyme.ShallowWrapper = enzyme.shallow(<TurnList turns={turns} />);

        expect(turnList.find(Turn).length).toBe(turns.length);

        turns.forEach((turn, index) => {
            const turnProps: TurnProps = turnList.find(Turn).at(index).props();
            expect(turnProps.player).toBe(turn.player);
            expect(turnProps.tokensRemoved).toBe(turn.tokensRemoved);
        });
    });

});

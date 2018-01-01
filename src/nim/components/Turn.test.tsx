import { Player } from '@luchsamapparat/nim';
import * as enzyme from 'enzyme';
import * as React from 'react';
import { Turn } from './Turn';

describe('Turn', () => {

    test('it renders the given turn', () => {
        const expectedPlayer = Player.Human;
        const expectedTokensRemoved = 1;
        const turn: enzyme.ShallowWrapper = enzyme.shallow(<Turn player={expectedPlayer} tokensRemoved={expectedTokensRemoved} />);

        const words = turn.find('.turn').text().split(' ');
        expect(words).toContain(expectedPlayer);
        expect(words).toContain(expectedTokensRemoved.toString());
    });

});

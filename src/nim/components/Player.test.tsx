import { Player as PlayerType } from '@luchsamapparat/nim';
import * as enzyme from 'enzyme';
import * as React from 'react';
import { toFriendlyPlayerName } from '../state/util';
import { Player } from './Player';

describe('Player', () => {
    test('it renders the player name', () => {
        const player = enzyme.shallow(<Player player={PlayerType.Human} />);

        expect(player.find('.player').text()).toBe(toFriendlyPlayerName(PlayerType.Human));
    });

    test('it renders nothing if null is given', () => {
        const player = enzyme.shallow(<Player player={null} />);

        expect(player.children().length).toBe(0);
    });
});

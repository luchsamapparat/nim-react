import { Player } from '@luchsamapparat/nim';
import { toFriendlyPlayerName } from './util';

describe('toFriendlyPlayerName', () => {

    test('it returns "You" for Human', () => {
        expect(toFriendlyPlayerName(Player.Human)).toBe('You');
    });

    test('it returns "The Computer" for Machine', () => {
        expect(toFriendlyPlayerName(Player.Machine)).toBe('The Computer');
    });

});

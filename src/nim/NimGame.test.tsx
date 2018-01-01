import * as enzyme from 'enzyme';
import * as React from 'react';
import { NimGame } from './NimGame';

describe('NimGame', () => {
    test('it renders the game container', () => {
        const nimGame = enzyme.shallow(<NimGame />);

        expect(nimGame.find('.nim')).toBeDefined();
    });
});

import * as enzyme from 'enzyme';
import * as React from 'react';
import { ResetGame } from './ResetGame';

describe('ResetGame', () => {
    const onResetGame = jest.fn();

    beforeEach(() => {
        onResetGame.mockClear();
    });

    test('it calls onResetGame when the button is clicked', () => {
        const resetGame = enzyme.shallow(<ResetGame onResetGame={onResetGame} />);

        resetGame.find('button').simulate('click');

        expect(onResetGame).toHaveBeenCalled();
    });
});

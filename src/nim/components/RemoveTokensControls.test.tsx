import * as enzyme from 'enzyme';
import * as React from 'react';
import { RemoveTokensControls } from './RemoveTokensControls';

describe('RemoveTokensControls', () => {
    const onRemoveTokensSpy = jest.fn();
    // tslint:disable-next-line:no-magic-numbers
    const choices = [1, 2, 3];

    beforeEach(() => {
        onRemoveTokensSpy.mockClear();
    });

    test('it renders the player name', () => {
        const removeTokensControls = enzyme.shallow(<RemoveTokensControls choices={choices} onRemoveTokens={onRemoveTokensSpy} />);

        choices.forEach((tokensToRemove, index) => {
            expect(removeTokensControls.find('button').at(index).text()).toBe(tokensToRemove.toString());
        });
    });

    test('it notifies the parent when a choice has been made via onRemoveTokens', () => {
        const removeTokensControls = enzyme.shallow(<RemoveTokensControls choices={choices} onRemoveTokens={onRemoveTokensSpy} />);

        choices.forEach((tokensToRemove, index) => {
            removeTokensControls.find('button').at(index).simulate('click');

            expect(onRemoveTokensSpy).toHaveBeenLastCalledWith(tokensToRemove);
        });
    });

    test('it renders nothing if no choices are given', () => {
        const removeTokensControls = enzyme.shallow(<RemoveTokensControls choices={[]} onRemoveTokens={onRemoveTokensSpy} />);

        expect(removeTokensControls.children().length).toBe(0);
    });
});

import * as enzyme from 'enzyme';
import { range } from 'lodash';
import * as React from 'react';
import { Tokens } from './Tokens';

describe('Tokens', () => {

    test('it renders tokens according to the given quantity', () => {
        // tslint:disable-next-line:no-magic-numbers
        range(1, 13).forEach(quantity => {
            const tokens: enzyme.ShallowWrapper = enzyme.shallow(<Tokens quantity={quantity} />);

            expect(tokens.find('.token').length).toBe(quantity);
        });
    });

});

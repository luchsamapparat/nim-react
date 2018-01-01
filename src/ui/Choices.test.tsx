import * as enzyme from 'enzyme';
import * as React from 'react';
import { Choice, Choices } from './Choices';

describe('Choices', () => {
    const onChangeSpy = jest.fn();
    let choices: enzyme.ShallowWrapper;
    const choiceData: Choice[] = [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2', isDefault: true },
        { value: 3, label: 'Option 3' }
    ];

    beforeEach(() => {
        onChangeSpy.mockClear();
        choices = enzyme.shallow(<Choices name="someName" choices={choiceData} onChange={onChangeSpy} />);
    });

    test('it renders the given options as radio buttons', () => {
        choiceData.map((choice, index) => {
            const label = choices.find('label').at(index);
            const radioButton = choices.find('input').at(index);

            expect(radioButton.props().value).toBe(choice.value);
            expect(radioButton.props().defaultChecked).toBe(choice.isDefault);
            expect(label.text()).toBe(choice.label);
        });
    });

    it('notifies about value changes via onChange', () => {
        const index = choiceData.length - 1;

        choices.find('input').at(index).simulate('change');

        expect(onChangeSpy).toHaveBeenCalledWith(choiceData[index].value);
    });
});

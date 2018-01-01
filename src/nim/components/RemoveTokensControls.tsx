import { isEmpty, toNumber } from 'lodash';
import * as React from 'react';
import './removeTokensControls.css';

export interface RemoveTokensControlsProps {
    choices: number[];
    onRemoveTokens(tokensToRemove: number): void;
}

export const RemoveTokensControls: React.StatelessComponent<RemoveTokensControlsProps> = ({ choices, onRemoveTokens }: RemoveTokensControlsProps) => {
    if (isEmpty(choices)) {
        return null;
    }

    return (
        <div className="remove-tokens-controls">
            How many tokens do you want to remove?
            <div>
                {choices.map(
                    (tokensToRemove, key) => <button onClick={() => onRemoveTokens(toNumber(tokensToRemove))} key={key}>{tokensToRemove}</button>
                )}
            </div>
        </div>
    );
};

RemoveTokensControls.defaultProps = {
    onRemoveTokens: () => undefined
};

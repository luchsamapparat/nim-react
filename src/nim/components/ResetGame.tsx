import * as React from 'react';

export interface ResetGameProps {
    onResetGame(): void;
}

export const ResetGame: React.StatelessComponent<ResetGameProps> = ({ onResetGame }: ResetGameProps) => {
    return (
        <button onClick={() => onResetGame()}>Play again</button>
    );
};

ResetGame.defaultProps = {
    onResetGame: () => undefined
};

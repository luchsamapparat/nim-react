import { GameConfig, Player } from '@luchsamapparat/nim';
import * as React from 'react';
import { PlayerSelection } from './PlayerSelection';

export interface StartNewGameFormProps {
    onStartNewGame(config: Partial<GameConfig>): void;
}


export const StartNewGameForm: React.StatelessComponent<StartNewGameFormProps> = ({ onStartNewGame }: StartNewGameFormProps) => {
    let startingPlayer: Player = Player.Human;

    return (
        <div className="start-new-game-form">
            <PlayerSelection defaultPlayer={startingPlayer} onChange={player => startingPlayer = player}  />
            <button onClick={() => onStartNewGame({ startingPlayer })}>Start New Game</button>
        </div>
    );
};

StartNewGameForm.defaultProps = {
    onStartNewGame: (config: GameConfig) => undefined
};

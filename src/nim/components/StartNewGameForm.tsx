import { GameConfig, Player } from '@luchsamapparat/nim';
import * as React from 'react';
import { PlayerSelection } from './PlayerSelection';
import './startNewGameForm.css';

export interface StartNewGameFormProps {
    onStartNewGame(config: Partial<GameConfig>): void;
}


export const StartNewGameForm: React.StatelessComponent<StartNewGameFormProps> = ({ onStartNewGame }: StartNewGameFormProps) => {
    let startingPlayer: Player = Player.Human;

    return (
        <form className="start-new-game-form" onSubmit={ e => e.preventDefault() }>
            <p>Who should start?</p>
            <PlayerSelection defaultPlayer={startingPlayer} onChange={player => startingPlayer = player}  />
            <button type="button" onClick={() => onStartNewGame({ startingPlayer })}>Start</button>
        </form>
    );
};

StartNewGameForm.defaultProps = {
    onStartNewGame: (config: GameConfig) => undefined
};

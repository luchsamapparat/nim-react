import { GameConfig, Player } from '@luchsamapparat/nim';
import Gamepads from 'gamepads';
import * as React from 'react';
import { PlayerSelection } from './PlayerSelection';
import './startNewGameForm.css';

export interface StartNewGameFormProps {
    onStartNewGame(config: Partial<GameConfig>): void;
}


export class StartNewGameForm extends React.PureComponent<StartNewGameFormProps> {
    static defaultProps = {
        onStartNewGame: (config: GameConfig) => undefined
    };

    private startingPlayer: Player = Player.Human;

    render() {
        return (
            <form className="start-new-game-form" onSubmit={ e => e.preventDefault() }>
                <p>Who should start?</p>
                <PlayerSelection defaultPlayer={this.startingPlayer} onChange={player => this.startingPlayer = player}  />
                <button type="button" onClick={() => this.startNewGame()}>Start</button>
            </form>
        );
    }

    componentDidMount() {
        Gamepads.addEventListener('connect', this.onGamepadConnect);
        Gamepads.start();
    }

    componentWillUnmount() {
        Gamepads.removeEventListener('connect', this.onGamepadConnect);
    }

    private startNewGame() {
        this.props.onStartNewGame({ startingPlayer: this.startingPlayer });
    }

    private onGamepadConnect = (event: GamepadEvent) => {
        const gamepad: any = event.gamepad;

        gamepad.addEventListener('buttonrelease', (e: any) => {
            if (e.index === 0) {
                this.startNewGame();
            }
        });
    }
}

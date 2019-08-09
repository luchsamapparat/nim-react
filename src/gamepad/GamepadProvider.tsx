import Gamepads from 'gamepads';
import { toNumber } from 'lodash';
import * as React from 'react';

interface GamepadProviderState {
    onConfirm(): void;
    onLeft(): void;
    onRight(): void;
}

const GamepadContext = React.createContext({
    onConfirm: () => {},
    onLeft: () => {},
    onRight: () => {}
});

export const GamepadConsumer = GamepadContext.Consumer;

export class GamepadProvider extends React.Component<{}, GamepadProviderState> {

    render() {
        return (
            <GamepadContext.Provider value={this.state}>
                {this.props.children}
            </GamepadContext.Provider>
        );
    }

    componentDidMount() {
        Gamepads.addEventListener('connect', this.onGamepadConnect);
        Gamepads.start();
    }

    componentWillUnmount() {
        Gamepads.removeEventListener('connect', this.onGamepadConnect);
    }

    private onGamepadConnect = (event: GamepadEvent) => {
        const gamepad: any = event.gamepad;

        const onButtonRelease = (e: any) => {
            // tslint:disable-next-line: no-magic-numbers
            if (e.index === 14) {
                this.state.onLeft();
            }

            // tslint:disable-next-line: no-magic-numbers
            if (e.index === 15) {
                this.state.onRight();
            }
        };

        const onJoystickMove = (e: any) => {
            // tslint:disable-next-line: no-magic-numbers
            if (Math.abs(toNumber(e.horizontalValue.toFixed())) < 0.2) {
                return;
            }

            if (e.horizontalValue < 0) {
                this.state.onLeft();
            }

            if (e.horizontalValue > 0) {
                this.state.onRight();
            }
        };

        gamepad.addEventListener('buttonrelease', onButtonRelease);
        gamepad.addEventListener('joystickmove', onJoystickMove, [0, 1]);
        // tslint:disable-next-line: no-magic-numbers
        gamepad.addEventListener('joystickmove', onJoystickMove, [2, 3]);
    }
}

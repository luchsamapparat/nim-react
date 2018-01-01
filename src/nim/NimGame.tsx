import * as React from 'react';
import { connect } from 'react-redux';
import { Heap } from './containers/Heap';
import { PlayAgain } from './containers/PlayAgain';
import { RemoveTokens } from './containers/RemoveTokens';
import { StartNewGame } from './containers/StartNewGame';
import { Turns } from './containers/Turns';
import { Winner } from './containers/Winner';
import './nim.css';
import { NimAction } from './state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from './state/reducer';
import { gameHasStarted, gameIsFinished } from './state/selectors';

export interface NimGameProps {
    hasStarted: boolean;
    isFinished: boolean;
}

export const Game: React.StatelessComponent<NimGameProps> = ({ hasStarted, isFinished }) => {
    return (
        <div className="nim">

            { !hasStarted ? (
                <StartNewGame />
            ) : null}

            { (hasStarted && isFinished) ? (
                <div>
                    <div className="winner">
                        <Winner /> won the Game!
                    </div>
                    <PlayAgain />
                </div>
            ) : null}

            { (hasStarted && !isFinished) ? (
                <div>
                    <Heap />
                    <RemoveTokens />
                </div>
            ) : null }

            { hasStarted ? (
                <div className="turn-history">
                    <Turns />
                </div>
            ) : null }
        </div>
    );
};

export const mapStateToProps: MapStateToProps<NimState, NimGameProps> = state => ({
    hasStarted: gameHasStarted(state),
    isFinished: gameIsFinished(state)
});

export const mapDispatchToProps: MapDispatchToProps<NimAction, NimGameProps> = dispatch => ({});

export const NimGame = connect(mapStateToProps, mapDispatchToProps)(Game);

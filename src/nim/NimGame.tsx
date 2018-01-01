import * as React from 'react';
import { Heap } from './containers/Heap';
import { RemoveTokens } from './containers/RemoveTokens';
import { StartNewGame } from './containers/StartNewGame';
import { Turns } from './containers/Turns';
import { Winner } from './containers/Winner';
import './nim.css';

export interface NimGameProps {}

export const NimGame: React.StatelessComponent<NimGameProps> = () => {
    return (
        <div className="nim">
            <StartNewGame />
            <RemoveTokens />
            <Heap />
            <div className="winner">
                <Winner />
            </div>
            <Turns />
        </div>
    );
};

import * as enzyme from 'enzyme';
import * as React from 'react';
import { Game } from './NimGame';
import { Heap } from './containers/Heap';
import { PlayAgain } from './containers/PlayAgain';
import { RemoveTokens } from './containers/RemoveTokens';
import { StartNewGame } from './containers/StartNewGame';
import { Turns } from './containers/Turns';
import { Winner } from './containers/Winner';

describe('NimGame', () => {

    describe('game has not started yet', () => {
        it('renders start new game form', () => {
            const nimGame = enzyme.shallow(<Game hasStarted={false} isFinished={false} />);

            expect(nimGame.find(StartNewGame).length).toBe(1);
            expect(nimGame.find(Winner).length).toBe(0);
            expect(nimGame.find(PlayAgain).length).toBe(0);
            expect(nimGame.find(Heap).length).toBe(0);
            expect(nimGame.find(RemoveTokens).length).toBe(0);
            expect(nimGame.find(Turns).length).toBe(0);
        });
    });

    describe('game has started but not finished', () => {
        it('renders the heap, remove tokens controls and the turn history', () => {
            const nimGame = enzyme.shallow(<Game hasStarted={true} isFinished={false} />);

            expect(nimGame.find(StartNewGame).length).toBe(0);
            expect(nimGame.find(Winner).length).toBe(0);
            expect(nimGame.find(PlayAgain).length).toBe(0);
            expect(nimGame.find(Heap).length).toBe(1);
            expect(nimGame.find(RemoveTokens).length).toBe(1);
            expect(nimGame.find(Turns).length).toBe(1);
        });

    });

    describe('game has started and is finished', () => {
        it('renders winner, play again button and turn history', () => {
            const nimGame = enzyme.shallow(<Game hasStarted={true} isFinished={true} />);

            expect(nimGame.find(StartNewGame).length).toBe(0);
            expect(nimGame.find(Winner).length).toBe(1);
            expect(nimGame.find(PlayAgain).length).toBe(1);
            expect(nimGame.find(Heap).length).toBe(0);
            expect(nimGame.find(RemoveTokens).length).toBe(0);
            expect(nimGame.find(Turns).length).toBe(1);
        });

    });

});

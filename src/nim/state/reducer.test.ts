// tslint:disable:no-magic-numbers
import { GameConfig, GameState, Player, StrategyName } from '@luchsamapparat/nim';
import { playRound, startGame } from './actions';
import { NimState, initialState, nimReducer } from './reducer';

export const getMockGameConfig = (): GameConfig => ({
    heapSize: 13,
    minTokensToRemove: 1,
    maxTokensToRemove: 3,
    startingPlayer: Player.Human,
    strategy: StrategyName.AlwaysMinStrategy
});

export const getMockGameState: () => GameState = () => {
    const gameConfig = getMockGameConfig();

    return {
        heapSize: gameConfig.heapSize,
        minTokensAllowedToRemove: gameConfig.minTokensToRemove,
        maxTokensAllowedToRemove: gameConfig.maxTokensToRemove,
        turns: [],
        winner: null,
        config: gameConfig
    };
};


describe('nimReducer', () => {
    const gameState = getMockGameState();
    const gameConfig = gameState.config;
    const state = {
        game: gameState
    };

    test('it returns the initial state if no state is given and an unknown action type is given', () => {
        expect(nimReducer(undefined, <any> { action: 'SOME_ACTION' })).toEqual(initialState);
    });

    test('it returns the given state if an unknown action type is given', () => {
        expect(nimReducer(state, <any> { action: 'SOME_ACTION' })).toBe(state);
    });

    describe('StartGameAction', () => {
        test('it starts a new game', () => {
            expect(nimReducer(initialState, startGame(gameConfig))).toEqual(state);
        });

        test('it replaces a previously started game with a new game', () => {
            const currentState: NimState = {
                ...state,
                game: {
                    ...state.game,
                    heapSize: 10
                }
            };

            expect(nimReducer(currentState, startGame(gameConfig))).toEqual(state);
        });
    });

    describe('PlayRoundAction', () => {
        test('it updates the previous game state with the one after the round has been played', () => {
            const updatedState = nimReducer(state, playRound(gameState.minTokensAllowedToRemove));
            const expectedHeapSize = state.game.heapSize - gameState.minTokensAllowedToRemove;

            const updatedGameState = updatedState.game!;
            const { heapSize, turns } = updatedGameState;

            expect(heapSize).toBeLessThan(expectedHeapSize);
            expect(turns).toHaveLength(2);
        });
    });

});

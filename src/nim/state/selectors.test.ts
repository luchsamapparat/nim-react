import { Player, StrategyName } from '@luchsamapparat/nim';
import { NimState } from './reducer';
import { getHeapSize, getTokensAllowedToRemoveOptions, getTurns, getWinner, isFinished } from './selectors';

const state: NimState = {
    game: {
        heapSize: 10,
        minTokensAllowedToRemove: 1,
        maxTokensAllowedToRemove: 3,
        turns: [
            { player: Player.Human, tokensRemoved: 1 },
            { player: Player.Machine, tokensRemoved: 2 }
        ],
        winner: null,
        config: {
            heapSize: 13,
            minTokensToRemove: 1,
            maxTokensToRemove: 3,
            startingPlayer: Player.Human,
            strategy: StrategyName.RemainderStrategy
        }
    }
};

const noGameStartedState: NimState = {
    ...state,
    game: null
};

const gameFinishedState: NimState = {
    ...state,
    game: {
        ...state.game!,
        heapSize: 0,
        minTokensAllowedToRemove: 0,
        maxTokensAllowedToRemove: 0,
        turns: [
            { player: Player.Human, tokensRemoved: 1 },
            { player: Player.Machine, tokensRemoved: 3 },
            { player: Player.Human, tokensRemoved: 2 },
            { player: Player.Machine, tokensRemoved: 2 },
            { player: Player.Human, tokensRemoved: 3 },
            { player: Player.Machine, tokensRemoved: 1 },
            { player: Player.Human, tokensRemoved: 1 }

        ],
        winner: Player.Machine
    }
};

describe('getHeapSize', () => {
    test('it returns the heap size from the given state', () => {
        expect(getHeapSize(state)).toBe(state.game!.heapSize);
    });

    test('it returns 0 when no game has been started yet', () => {
        expect(getHeapSize(noGameStartedState)).toBe(0);
    });
});

describe('isFinished', () => {
    test('it returns true when the current game has a winner', () => {
        expect(isFinished(gameFinishedState)).toBe(true);
    });

    test('it returns false when the current game has no winner yet', () => {
        expect(isFinished(state)).toBe(false);
    });

    test('it returns false when no game has been started yet', () => {
        expect(isFinished(noGameStartedState)).toBe(false);
    });
});

describe('getTurns', () => {
    test('it returns the previous turns of the current game', () => {
        expect(getTurns(gameFinishedState)).toBe(gameFinishedState.game!.turns);
    });

    test('it returns an empty array when no game has been started yet', () => {
        expect(getTurns(noGameStartedState)).toEqual([]);
    });
});

describe('getWinner', () => {
    test('it returns the winner of the current game', () => {
        expect(getWinner(gameFinishedState)).toBe(gameFinishedState.game!.winner);
    });

    test('it returns null when the current game has no winner yet', () => {
        expect(getWinner(state)).toBeNull();
    });

    test('it returns null when no game has been started yet', () => {
        expect(getWinner(noGameStartedState)).toBeNull();
    });
});

describe('getTokensAllowedToRemoveOptions', () => {
    test('it returns all allowed numbers of tokens allowed to be removed from the current heap', () => {
        // tslint:disable-next-line:no-magic-numbers
        expect(getTokensAllowedToRemoveOptions(state)).toEqual([1, 2, 3]);
    });

    test('it returns an empty array when no game has been started yet', () => {
        expect(getTokensAllowedToRemoveOptions(noGameStartedState)).toEqual([]);
    });

    test('it returns an empty array when the game has finished', () => {
        expect(getTokensAllowedToRemoveOptions(gameFinishedState)).toEqual([]);
    });
});

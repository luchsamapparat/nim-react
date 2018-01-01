import { isEmpty, isNull, range } from 'lodash';
import { NimState } from './reducer';

export const getHeapSize = ({ game }: NimState) => isNull(game) ? 0 : game.heapSize;

export const gameIsFinished = (state: NimState) => !isNull(getWinner(state)) && !isEmpty(getTurns(state));

export const gameHasStarted = (state: NimState) => !isNull(state.game);

export const getTurns = ({ game }: NimState) => isNull(game) ? [] : game.turns;

export const getWinner = ({ game }: NimState) => isNull(game) ? null : game.winner;

export const getTokensAllowedToRemoveOptions = (state: NimState) => {
    if (isNull(state.game) || gameIsFinished(state)) {
        return [];
    }

    return range(state.game!.minTokensAllowedToRemove, state.game!.maxTokensAllowedToRemove + 1);
};

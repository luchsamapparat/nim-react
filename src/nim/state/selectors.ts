import { isNull, range } from 'lodash';
import { NimState } from './reducer';

export const getHeapSize = ({ game }: NimState) => isNull(game) ? 0 : game.heapSize;

export const isFinished = (state: NimState) => !isNull(getWinner(state));

export const getTurns = ({ game }: NimState) => isNull(game) ? [] : game.turns;

export const getWinner = ({ game }: NimState) => (isNull(game) || isNull(game.winner)) ? null : game.winner;

export const getTokensAllowedToRemoveOptions = (state: NimState) => {
    if (isNull(state.game) || isFinished(state)) {
        return [];
    }

    return range(state.game!.minTokensAllowedToRemove, state.game!.maxTokensAllowedToRemove + 1);
};

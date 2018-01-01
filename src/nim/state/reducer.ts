import { GameState, playRound, startGame } from '@luchsamapparat/nim';
import { Dispatch } from 'react-redux';
import { NimAction, PLAY_ROUND, RESET_GAME, START_GAME } from './actions';

export type MapStateToProps<S, T> = (state: S) => Partial<T>;
export type MapDispatchToProps<A, T> = (dispatch: Dispatch<A>) => Partial<T>;

export interface NimState {
    game: GameState | null;
}

export const initialState: NimState = {
    game: null
};

export function nimReducer(state: NimState = initialState, action: NimAction): NimState {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                game: startGame(action.config)
            };
        case RESET_GAME:
            return {
                ...state,
                game: null
            };
        case PLAY_ROUND:
            return {
                ...state,
                game: playRound(action.tokensToRemove)(state.game!)
            };
    }
    return state;
}

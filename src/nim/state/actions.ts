import { GameConfig } from '@luchsamapparat/nim';

export const START_GAME = 'START_GAME';
export type START_GAME = typeof START_GAME;

export const RESET_GAME = 'RESET_GAME';
export type RESET_GAME = typeof RESET_GAME;

export const PLAY_ROUND = 'PLAY_ROUND';
export type PLAY_ROUND = typeof PLAY_ROUND;

export interface StartGameAction {
    type: START_GAME;
    config: GameConfig;
}

export const startGame = (config: GameConfig): StartGameAction => ({
    type: START_GAME,
    config
});

export interface ResetGameAction {
    type: RESET_GAME;
}

export const resetGame = (): ResetGameAction => ({
    type: RESET_GAME
});

export interface PlayRoundAction {
    type: PLAY_ROUND;
    tokensToRemove: number;
}

export const playRound = (tokensToRemove: number): PlayRoundAction => ({
    type: PLAY_ROUND,
    tokensToRemove
});

export type NimAction = StartGameAction | PlayRoundAction | ResetGameAction;

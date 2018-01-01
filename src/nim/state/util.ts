import { Player } from '@luchsamapparat/nim';

export const toFriendlyPlayerName = (player: Player): string  => {
    return (player === Player.Human) ? 'You' : 'The Computer';
};

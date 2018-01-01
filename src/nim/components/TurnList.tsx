import { Turn as TurnType } from '@luchsamapparat/nim';
import * as React from 'react';
import { Turn } from './Turn';

export interface TurnListProps {
    turns: TurnType[];
}

export const TurnList: React.StatelessComponent<TurnListProps> = ({ turns }: TurnListProps) => {
    return (
        <div className="turn-list">
            {turns.map((turn, key) => <Turn player={turn.player} tokensRemoved={turn.tokensRemoved} key={key} />)}
        </div>
    );
};

TurnList.defaultProps = {
    turns: []
};

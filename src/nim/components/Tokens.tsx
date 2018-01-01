import { range } from 'lodash';
import * as React from 'react';
import './match.png';
import './tokens.css';

export interface TokensProps {
    quantity: number;
}

export const Tokens: React.StatelessComponent<TokensProps> = ({ quantity }: TokensProps) => {
    return (
        <div className="tokens">
            {range(quantity).map(key => <span className="token" key={key}></span>)}
        </div>
    );
};

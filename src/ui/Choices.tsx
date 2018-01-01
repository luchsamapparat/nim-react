import * as React from 'react';
import './choices.css';

export interface ChoicesProps {
    name: string;
    choices: Choice[];
    onChange(value: any): void;
}

export interface Choice<T = any> {
    label: string;
    value: T;
    isDefault?: boolean;
}

export const Choices: React.StatelessComponent<ChoicesProps> = ({ name, choices, onChange }: ChoicesProps) => {
    return (
        <div className="choices">
            {choices.map((choice, key) => (
                <label htmlFor={`${name}-${key}`} key={key}>
                    <input type="radio" name={name} id={`${name}-${key}`} value={choice.value} defaultChecked={choice.isDefault} onChange={() => onChange(choice.value)} />
                    <span className="label">{choice.label}</span>
                </label>
            ))}
        </div>
    );
};

Choices.defaultProps = {
    choices: [],
    onChange: (choice: any) => undefined
};

import * as React from 'react';

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
                <span key={key}>
                    <input type="radio" name={name} id={`${name}-${key}`} value={choice.value} defaultChecked={choice.isDefault} onChange={() => onChange(choice.value)} />
                    <label htmlFor={`${name}-${key}`}>{choice.label}</label>
                </span>
            ))}
        </div>
    );
};

Choices.defaultProps = {
    choices: [],
    onChange: (choice: any) => undefined
};

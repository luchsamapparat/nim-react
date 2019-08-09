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

export class Choices extends React.PureComponent<ChoicesProps> {
    static defaultProps = {
        choices: [],
        onChange: (choice: any) => undefined
    };

    private checkedIndex = this.props.choices.findIndex(choice => choice.isDefault!);

    render() {
        return (
            <div className="choices">
                {this.props.choices.map((choice, key) => (
                    <span key={key}>
                        <input
                            type="radio"
                            name={this.props.name}
                            id={`${this.props.name}-${key}`}
                            value={choice.value}
                            checked={key === this.checkedIndex}
                            onChange={() => this.props.onChange(choice.value)}
                        />
                        <label htmlFor={`${name}-${key}`}>{choice.label}</label>
                    </span>
                ))}
            </div>
        );
    }

    private selectPrevious() {
        this.checkedIndex = Math.max(0, this.checkedIndex - 1);
    }

    private selectNext() {
        this.checkedIndex = Math.min(this.props.choices.length - 1, this.checkedIndex + 1);
    }

}

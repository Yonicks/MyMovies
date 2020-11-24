import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Hello extends React.Component<Props> {

    render() {
        debugger
        const { name = 'Typescript', enthusiasmLevel, onIncrement, onDecrement } = this.props;

        if (!enthusiasmLevel || enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    debugger
    return Array(numChars + 1).join('!');
}
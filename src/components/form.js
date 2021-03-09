import { useState } from 'react';
import Button from "./button";

const Form = () => {
    const [amount, setAmount] = useState(0);

    return (
        <div className="Form">
            <Button data-test-id='button-subtract' onClick={() => setAmount(number => number - 1)}>
                -
            </Button>
            <div data-test-id='value'>
                {amount}
            </div>
            <Button data-test-id='button-add' onClick={() => setAmount(number => number + 1)}>
                +
            </Button>
        </div>
    );
};

export default Form;

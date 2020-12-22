import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function GCD({ setOutput, setHeading }) {
    setHeading("GCD - Euclid's Theorem");
    const submit = () => {
        if (inputs.a && inputs.b) {
            const val = gcd(inputs.a, inputs.b);
            setOutput(val);
        }
    };

    const gcd = (a, b) => {
        if (a < b) return gcd(b, a);
        if (b === 1) return "GCD is 1";
        if (b === 0) return "GCD is " + a;
        const mod = a % b;
        return (
            "a = " + a + ", b = " + b + ", a%b = " + mod + "\n" + gcd(b, mod)
        );
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: null,
        b: null,
    });

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Input
                        placeholder="a"
                        name="a"
                        type="number"
                        value={inputs.a}
                        onChange={handleInputChange}
                    />
                    <Form.Input
                        placeholder="b"
                        name="b"
                        type="number"
                        value={inputs.b}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
            <AwesomeButton onPress={() => submit()}>Submit</AwesomeButton>
        </div>
    );
}

export default GCD;
